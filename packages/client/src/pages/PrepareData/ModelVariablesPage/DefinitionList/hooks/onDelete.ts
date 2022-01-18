/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import { useCallback } from 'react'
import { SetModelVariables } from './types'
import { PageType } from '~enums'
import {
	CausalFactor,
	Definition,
	ElementDefinition,
	Factor,
} from '~interfaces'
import { GenericFn } from '~types'

interface OnDuplicateArgs {
	modelVariables?: Definition
	type: string
	setModelVariables: SetModelVariables
	removeDefinition: GenericFn
	deleteCausalFactor: GenericFn
}

export function useOnDelete({
	modelVariables,
	type,
	setModelVariables,
	removeDefinition,
	deleteCausalFactor,
}: OnDuplicateArgs): GenericFn {
	return useCallback(
		(val: Factor) => {
			if (type === PageType.Control) {
				return deleteCausalFactor(val as CausalFactor)
			}
			const existing = (modelVariables && modelVariables[type]) || []
			const actualVariables = existing.filter(x => x.name !== val.variable)
			const definitionObj = {
				...modelVariables,
				[type]: [...actualVariables],
			}
			setModelVariables(definitionObj)
			removeDefinition(val as ElementDefinition)
		},
		[
			modelVariables,
			type,
			setModelVariables,
			removeDefinition,
			deleteCausalFactor,
		],
	)
}
