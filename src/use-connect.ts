import { connect, disconnect } from 'echarts/core'
import { useState } from 'react'

export const useConnect = (group: string) => {
	const [isConnected, setIsConnected] = useState(false)

	function onChange(connected: boolean) {
		if (connected) {
			connect(group)
		} else {
			disconnect(group)
		}

		setIsConnected(connected)
	}

	return [isConnected, onChange]
}
