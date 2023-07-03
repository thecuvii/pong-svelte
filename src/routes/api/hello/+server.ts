export function GET() {
	return new Response(
		JSON.stringify({
			data: 'hello world'
		})
	);
}

export const config = {
	runtime: 'edge', // this is a pre-requisite
	regions: ['cdg1'] // only execute this function on iad1
};
