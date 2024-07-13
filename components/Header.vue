<template>
	<header
		class="absolute top-0 z-50 flex h-20 w-full items-center justify-between px-4 lg:px-10"
	>
		<div class="flex items-center">
			<RouterLink to="/wailin">
				<h3 class="text-4xl font-bold">Charm</h3>
			</RouterLink>
		</div>

		<div class="flex items-center justify-end gap-4 lg:gap-10">
			<RouterLink to="/wailin">About me</RouterLink>
			<RouterLink to="/wailin">Resume</RouterLink>
			<RouterLink to="/wailin">Contact</RouterLink>
		</div>
	</header>
</template>
