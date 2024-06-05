<script lang="ts">
	import type { Comment, PassageConfig, TextContainer } from 'kodon';
	import { ReadingEnvironment } from 'kodon';

	export let data;

	$: comments = data.comments as unknown as Comment[];
	$: currentPassage = data.currentPassage as unknown as PassageConfig;
	$: metadata = data.metadata;
	$: passages = data.passages as unknown as PassageConfig[];
	$: textContainers = data.textContainers as unknown as TextContainer[];

	function stripMarkdown(s: string): string {
		return s.replace(/_|\*/gi, '');
	}
</script>

<svelte:head>
	<title>{stripMarkdown(metadata.title)}</title>
</svelte:head>
<ReadingEnvironment
	{comments}
	{currentPassage}
	{metadata}
	iiifURL="https://raw.githubusercontent.com/AjaxMultiCommentary/ajmc_iiif/main/docs"
	{passages}
	{textContainers}
/>
