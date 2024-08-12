export default {
	'*.{ts,tsx,js,jsx}': [
		'pnpm biome lint --apply --verbose',
		'pnpm biome format --write --verbose'
	],
	'*.ts?(x)': 'bash -c tsc --noEmit'
}
