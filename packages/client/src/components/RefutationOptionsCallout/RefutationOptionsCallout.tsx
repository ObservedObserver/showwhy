/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { memo } from 'react'
import { LinkCallout } from '~components/Callout'
import { Text } from '~styles'
import { RefutationOption } from '~types'

interface RefutationOptionsCalloutProps {
	title: string
	calloutKey: number
	refutationOptions?: RefutationOption[]
	text?: string
	separate?: boolean | undefined
}
export const RefutationOptionsCallout: React.FC<RefutationOptionsCalloutProps> =
	memo(function RefutationOptionsCallout({
		title,
		refutationOptions,
		text,
		calloutKey,
		separate,
	}) {
		return (
			<>
				{separate && <Text>, </Text>}
				<LinkCallout title={title} id={`estimator-card-${calloutKey}`}>
					{text || refutationOptions?.find(x => x.label === title)?.helpText}
				</LinkCallout>
			</>
		)
	})
