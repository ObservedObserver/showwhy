/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import type { RefutationType } from '@showwhy/types'
import { NodeResponseStatus } from '@showwhy/types'
import { v4 } from 'uuid'

import type { RunHistory } from '~types'

import { SESSION_ID_KEY } from './constants'
import { createAndReturnStorageItem } from './sessionStorage'

export function initialRunHistory(
	specCount: number,
	hasConfidenceInterval: boolean,
	refutationType: RefutationType,
	runHistoryLength: number,
): RunHistory {
	return {
		id: v4(),
		runNumber: runHistoryLength + 1,
		isActive: true,
		status: {
			status: NodeResponseStatus.Running,
			estimated_effect_completed: `0/${specCount}`,
			confidence_interval_completed: `0/${specCount}`,
			refute_completed: `0/${specCount}`,
			percentage: 0,
			time: {
				start: new Date(),
			},
		},
		sessionId: createAndReturnStorageItem(SESSION_ID_KEY, v4()),
		hasConfidenceInterval,
		refutationType,
	} as RunHistory
}

export function disableAllRuns(runHistory: RunHistory[]): RunHistory[] {
	return runHistory.map(run => {
		return { ...run, isActive: false }
	})
}
