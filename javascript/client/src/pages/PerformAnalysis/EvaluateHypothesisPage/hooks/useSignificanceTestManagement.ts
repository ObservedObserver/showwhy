/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import { OrchestratorType } from '@showwhy/api-client'
import { buildSignificanceTestsNode } from '@showwhy/builders'
import type {
	Handler,
	Specification,
	SpecificationCurveConfig,
} from '@showwhy/types'
import { useCallback, useMemo, useState } from 'react'

import { useDefaultRun } from '~hooks'

import { useRunSignificanceTest } from './useRunSignificanceTest'

export function useSignificanceTestManagement(
	failedRefutationIds: number[],
	specificationData: Specification[],
	specificationCurveConfig: SpecificationCurveConfig,
): {
	cancelRun: Handler
	runSignificance: Handler
	isCanceled: boolean
	activeEstimatedEffects: number[]
} {
	const defaultRun = useDefaultRun()
	const run = useRunSignificanceTest(defaultRun?.id)
	const [isCanceled, setIsCanceled] = useState<boolean>(false)

	const activeSpecifications = useMemo((): Specification[] => {
		return specificationData.filter(
			x =>
				!specificationCurveConfig?.inactiveSpecifications?.includes(x.id) &&
				!failedRefutationIds.includes(x.id),
		)
	}, [specificationData, specificationCurveConfig, failedRefutationIds])

	const activeTaskIds = useMemo((): string[] => {
		return activeSpecifications.map(x => x.taskId)
	}, [activeSpecifications])

	const activeEstimatedEffects = useMemo(() => {
		return activeSpecifications.map(x => x.estimatedEffect)
	}, [activeSpecifications])

	const cancelRun = useCallback(() => {
		setIsCanceled(true)
		run().cancel()
	}, [run, setIsCanceled])

	const runSignificance = useCallback(() => {
		const nodes = buildSignificanceTestsNode(activeTaskIds)
		run().execute(nodes, OrchestratorType.ConfidenceInterval)
	}, [run, activeTaskIds])

	return {
		cancelRun,
		runSignificance,
		isCanceled,
		activeEstimatedEffects,
	}
}