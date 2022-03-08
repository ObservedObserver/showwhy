/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

import type { IChoiceGroupOption } from '@fluentui/react'
import { ChoiceGroup } from '@fluentui/react'
import { CausalModelLevel } from '@showwhy/types'
import { memo } from 'react'
import styled from 'styled-components'

import { CausalEffects } from '~components/CausalEffects'
import { Container } from '~styles'

import { useBusinessLogic } from './hooks'

const causalModelOptions: IChoiceGroupOption[] = [
	{
		key: CausalModelLevel.Maximum,
		text: CausalModelLevel[CausalModelLevel.Maximum],
	},
	{
		key: CausalModelLevel.Intermediate,
		text: CausalModelLevel[CausalModelLevel.Intermediate],
	},
	{
		key: CausalModelLevel.Minimum,
		text: CausalModelLevel[CausalModelLevel.Minimum],
	},
	{
		key: CausalModelLevel.Unadjusted,
		text: CausalModelLevel[CausalModelLevel.Unadjusted],
	},
]

export const ConfirmAlternativeModelsPage: React.FC = memo(
	function ConfirmAlternativeModels() {
		const {
			causalEffects,
			onXarrowChange,
			setPrimarySpecificationConfig,
			primarySpecificationConfig,
		} = useBusinessLogic()

		return (
			<Container>
				<Container>
					<Choice
						options={causalModelOptions}
						selectedKey={primarySpecificationConfig.causalModel}
						onChange={(_, objValue) => {
							onXarrowChange()
							setPrimarySpecificationConfig({
								...primarySpecificationConfig,
								causalModel:
									(objValue && (objValue?.key as CausalModelLevel)) ||
									CausalModelLevel.Maximum,
							})
						}}
						label="Select the default causal model"
					/>
				</Container>
				<CausalEffects {...causalEffects} />
			</Container>
		)
	},
)

const Choice = styled(ChoiceGroup)`
	div {
		display: flex;
		justify-content: space-around;
	}

	.ms-ChoiceField {
		margin: 0 8px 0 8px;
	}
	margin: 8px 0 16px 0;
`
