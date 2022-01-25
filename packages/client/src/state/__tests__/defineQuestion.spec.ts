/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import { renderHook } from '@testing-library/react-hooks'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { useSetDefineQuestion, useDefineQuestion } from '../defineQuestion'
import { Experiment } from '~types'

describe('useDefineQuestion', () => {
	it('should return empty object as default value', () => {
		const { result } = renderHook(() => useDefineQuestion(), {
			wrapper: RecoilRoot,
		})

		expect(result.current).toEqual({})
	})

	it('should return the updated state', () => {
		const define = {
			population: {
				label: 'label test',
				description: 'description test',
			},
		} as Experiment

		const { result } = renderHook(
			() => {
				const setDefineQuestion = useSetDefineQuestion()
				const defineQuestion = useDefineQuestion()
				useEffect(() => {
					setDefineQuestion(define)
				}, [setDefineQuestion])

				return defineQuestion
			},
			{
				wrapper: RecoilRoot,
			},
		)

		expect(result.current).toEqual(define)
	})
})
