/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { memo } from 'react'

export const CorrelationIcon: React.FC<{ color: string }> = memo(
	function CorrelationIcon({ color }) {
		return (
			<svg
				width="22"
				height="12"
				viewBox="0 0 22 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_13246_41467)">
					<path
						d="M19.8388 6.7491C20.253 6.7491 20.5888 6.41332 20.5888 5.9991C20.5888 5.58489 20.253 5.2491 19.8388 5.2491L19.1317 5.2491C18.7175 5.2491 18.3817 5.58489 18.3817 5.9991C18.3817 6.41332 18.7175 6.7491 19.1317 6.7491H19.8388ZM16.3462 5.9991C16.3462 6.41332 16.0104 6.7491 15.5962 6.7491H14.8891C14.4749 6.7491 14.1391 6.41332 14.1391 5.9991C14.1391 5.58489 14.4749 5.2491 14.8891 5.2491H15.5962C16.0104 5.2491 16.3462 5.58489 16.3462 5.9991ZM12.1036 5.9991C12.1036 6.41332 11.7678 6.7491 11.3536 6.7491H10.6464C10.2322 6.7491 9.89645 6.41332 9.89645 5.9991C9.89645 5.58489 10.2322 5.2491 10.6464 5.2491H11.3536C11.7678 5.2491 12.1036 5.58489 12.1036 5.9991ZM7.86091 5.9991C7.86091 6.41332 7.52513 6.7491 7.11091 6.7491H6.40381C5.98959 6.7491 5.65381 6.41332 5.65381 5.9991C5.65381 5.58489 5.98959 5.2491 6.40381 5.2491H7.11091C7.52513 5.2491 7.86091 5.58489 7.86091 5.9991ZM2.86827 6.7491C3.28249 6.7491 3.61827 6.41332 3.61827 5.9991C3.61827 5.58489 3.28249 5.2491 2.86827 5.2491L2.16117 5.2491C1.74695 5.2491 1.41117 5.58489 1.41117 5.9991C1.41117 6.41332 1.74695 6.7491 2.16117 6.7491H2.86827Z"
						fill={color}
					/>
				</g>
				<defs>
					<clipPath id="clip0_13246_41467">
						<rect width="22" height="12" fill="white" />
					</clipPath>
				</defs>
			</svg>
		)
	},
)

export const EdgeIcon: React.FC<{ color: string }> = memo(function EdgeIcon({
	color,
}) {
	return (
		<svg
			width="22"
			height="12"
			viewBox="0 0 22 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_13246_41467)">
				<path
					d="M19.8388 6.7491C20.253 6.7491 20.5888 6.41332 20.5888 5.9991C20.5888 5.58489 20.253 5.2491 19.8388 5.2491L19.1317 5.2491C18.7175 5.2491 18.3817 5.58489 18.3817 5.9991C18.3817 6.41332 18.7175 6.7491 19.1317 6.7491H19.8388ZM16.3462 5.9991C16.3462 6.41332 16.0104 6.7491 15.5962 6.7491H14.8891C14.4749 6.7491 14.1391 6.41332 14.1391 5.9991C14.1391 5.58489 14.4749 5.2491 14.8891 5.2491H15.5962C16.0104 5.2491 16.3462 5.58489 16.3462 5.9991ZM12.1036 5.9991C12.1036 6.41332 11.7678 6.7491 11.3536 6.7491H10.6464C10.2322 6.7491 9.89645 6.41332 9.89645 5.9991C9.89645 5.58489 10.2322 5.2491 10.6464 5.2491H11.3536C11.7678 5.2491 12.1036 5.58489 12.1036 5.9991ZM7.86091 5.9991C7.86091 6.41332 7.52513 6.7491 7.11091 6.7491H6.40381C5.98959 6.7491 5.65381 6.41332 5.65381 5.9991C5.65381 5.58489 5.98959 5.2491 6.40381 5.2491H7.11091C7.52513 5.2491 7.86091 5.58489 7.86091 5.9991ZM2.86827 6.7491C3.28249 6.7491 3.61827 6.41332 3.61827 5.9991C3.61827 5.58489 3.28249 5.2491 2.86827 5.2491L2.16117 5.2491C1.74695 5.2491 1.41117 5.58489 1.41117 5.9991C1.41117 6.41332 1.74695 6.7491 2.16117 6.7491H2.86827Z"
					fill={color}
				/>
				<path
					d="M16.2197 0.918889C16.4859 0.652622 16.9026 0.628416 17.1962 0.846271L17.2803 0.918889L21.7803 5.41889C22.0466 5.68516 22.0708 6.10182 21.8529 6.39543L21.7803 6.47955L17.2803 10.9795C16.9874 11.2724 16.5126 11.2724 16.2197 10.9795C15.9534 10.7133 15.9292 10.2966 16.1471 10.003L16.2197 9.91889L20.1893 5.94922L16.2197 1.97955C15.9268 1.68666 15.9268 1.21178 16.2197 0.918889Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_13246_41467">
					<rect width="22" height="12" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
})
