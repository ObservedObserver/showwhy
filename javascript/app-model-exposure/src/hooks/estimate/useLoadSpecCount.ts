/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import { useBoolean } from '@fluentui/react-hooks'
import { useEffect } from 'react'

import { api } from '../../resources/api.js'
import { useSetSpecCount } from '../../state/specCount.js'
import type { EstimateEffectRequest } from '../../types/api/EstimateEffectRequest.js'
import type { Handler1, Maybe } from '../../types/primitives.js'
import type { ProjectJson } from '../../types/workspace/ProjectJson.js'

export function useLoadSpecCount(
	estimateNode: Maybe<EstimateEffectRequest>,
	isProcessing: boolean,
	setErrors: Handler1<string>,
	project: Partial<ProjectJson>,
): boolean {
	const [loading, { setTrue: trueLoading, setFalse: falseLoading }] =
		useBoolean(false)
	const setSpecCount = useSetSpecCount()

	useEffect(() => {
		if (!estimateNode || isProcessing || !project.name) return
		trueLoading()
		setErrors('')
		if (api.project !== project.name) {
			api.setProject(project.name)
		}
		api
			.estimateExecutionCount(estimateNode)
			.then(res => {
				setSpecCount(res.count)
			})
			.catch(err => {
				setErrors(
					(err.message as string) || //eslint-disable-line
						'Unknown error, please contact the system admin.',
				)
			})
			.finally(() => falseLoading())
	}, [
		isProcessing,
		setSpecCount,
		estimateNode,
		setErrors,
		trueLoading,
		falseLoading,
		project,
	])

	return loading
}