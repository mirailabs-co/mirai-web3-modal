import { describe, expect, test, beforeAll, jest, beforeEach } from '@jest/globals';
import { MiraiSignCore, MiraiConnection, MiraiSignProvider } from '../../src/sign-provider';
import { delay } from 'lodash';

describe('Initialize mirai-sign-core', () => {
	let miraiSignCore: MiraiSignCore;
	let miraiConnection: MiraiConnection;
	let miraiSignProvider: MiraiSignProvider;
	let topicConnected: string[] = [];

	beforeAll(async () => {
		miraiSignCore = await MiraiSignCore.init({
			clientId: 'a0bac604-0fa4-447a-a3de-4deff02008c4',
			chainNameSpace: 'eip155',
			chains: ['0x38', '0x893'],
			metaData: {
				name: 'Mirai App',
				description: 'Mirai App',
				icons: [''],
			},
			onOpenConnectionModal: async (connnection: MiraiConnection, url: string) => {
				// URL includes wc_uri, topicId as searchParams
				// App can open modal/webview,...
				expect(url).toContain('/sign');
				expect(url).toContain('wc_uri=');
				expect(url).toContain('topicId=');
				expect(connnection).toBeTruthy();
			},
			onCloseConnectionModal: async (connnection: MiraiConnection) => {
				console.log(connnection);
			},
			redirectUri: 'https://miraiid.io',
		});

		miraiSignCore.on('new_connection', (e) => {
			const { topicId } = e;
			topicConnected.push(topicId);
		});
	});

	test('Initialize', async () => {
		expect(miraiSignCore).toBeTruthy();
	});

	test('Sign core props', () => {
		expect(miraiSignCore.chains).toHaveLength(['0x38', '0x893'].length);
		expect(miraiSignCore.namespace).toBeTruthy();
	});

	test('Initialized Sign Connection', async () => {
		miraiConnection = await miraiSignCore.connect({
			accessToken:
				'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhMGJhYzYwNC0wZmE0LTQ0N2EtYTNkZS00ZGVmZjAyMDA4YzQiLCJqdGkiOiJiYTMxMTVhYS1mY2Q4LTQ5MWUtOGVmYi02YmIwMmY1YWRhNDYiLCJleHAiOjE2OTI4ODc3NjgsInN1YiI6ImJmYjRmZmY2LWUzMTQtNDI2OS1iYTAyLWRmYzU5MTk1MzRjZiIsInNjb3BlcyI6WyJvcGVuaWQiLCJlbWFpbCIsIm9mZmxpbmVfYWNjZXNzIiwicHJvZmlsZSJdLCJlbWFpbCI6ImR1Y3BodW9jLnQ5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiUGjGsOG7m2MgTmd1eeG7hW4gxJDhu6ljIiwiZ2l2ZW5fbmFtZSI6IlBoxrDhu5tjIiwiZmFtaWx5X25hbWUiOiJOZ3V54buFbiDEkOG7qWMiLCJpc3MiOiJodHRwczovL2lkLWRldi12Mi5taXJhaWxhYnMuY28iLCJhenAiOiJhMGJhYzYwNC0wZmE0LTQ0N2EtYTNkZS00ZGVmZjAyMDA4YzQiLCJpYXQiOjE2OTI4MDEzNjh9.X9-JxsLxFjV74b3cAuRdoAHdpjMy69KsqAUlRy-E_mQ68NQ5urpLoLfcGiF2jInkdcoOPNW0Y33mGpw4Ud5YO6u9IGU1m2vhycdjvDmO_Kp1qASJl_BlqmTIcARMjyl9Eu1aTJu7_09liFRmlEPPXhIylmmjGkiFTClFiyIGgIrW8_bDinJJURDjtwBCijP3ZR6YLA2DT7fU3iCFCeHZ7FzcyC_JoTQEITMU2MheEqfpt_2zHLzqjhqakNQgdznErqmRrEuwXQMw-cO4uJhOY5-bv6pQJ-rdtGZcqxzLmKswg0rjoPdgXbpPxlPv7bId-36N8ccJsDmtz-sFBFk0HkCHUvjaEFgSg6Ho05jlPh_DzYNtMN6PQzfVt0T7r5-UFYdKWVtAtePhaM3Q-MIsVraYquVAllmhhsM0XLUJl-XjNHApdDmi5Ny0V6kd_Y5FjeYl6RSejVmyLX7b_IN9SXMtA4fgbyZypaphdtqxjCV5DlR3YtFknz0trVkpRpc5mZw5xu5uLIS9K7GF3NiTwKedjdBVFuwCWE3PTgAmuWDS6oRVy9EjcwqzTUsRB9WhX548wXmrLntwGyMdQWOWGsaZH1s0bySuK0aUfRkJ39SEfQiYinqkvzgGTdZBwMR2ftYe3mHlVEv0a8MXpeOhBsEEWiBWEFDPp9GrCTYS6yw',
		});

		expect(miraiConnection).toBeTruthy();
		expect(miraiConnection.accessToken).toBe(
			'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhMGJhYzYwNC0wZmE0LTQ0N2EtYTNkZS00ZGVmZjAyMDA4YzQiLCJqdGkiOiJiYTMxMTVhYS1mY2Q4LTQ5MWUtOGVmYi02YmIwMmY1YWRhNDYiLCJleHAiOjE2OTI4ODc3NjgsInN1YiI6ImJmYjRmZmY2LWUzMTQtNDI2OS1iYTAyLWRmYzU5MTk1MzRjZiIsInNjb3BlcyI6WyJvcGVuaWQiLCJlbWFpbCIsIm9mZmxpbmVfYWNjZXNzIiwicHJvZmlsZSJdLCJlbWFpbCI6ImR1Y3BodW9jLnQ5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiUGjGsOG7m2MgTmd1eeG7hW4gxJDhu6ljIiwiZ2l2ZW5fbmFtZSI6IlBoxrDhu5tjIiwiZmFtaWx5X25hbWUiOiJOZ3V54buFbiDEkOG7qWMiLCJpc3MiOiJodHRwczovL2lkLWRldi12Mi5taXJhaWxhYnMuY28iLCJhenAiOiJhMGJhYzYwNC0wZmE0LTQ0N2EtYTNkZS00ZGVmZjAyMDA4YzQiLCJpYXQiOjE2OTI4MDEzNjh9.X9-JxsLxFjV74b3cAuRdoAHdpjMy69KsqAUlRy-E_mQ68NQ5urpLoLfcGiF2jInkdcoOPNW0Y33mGpw4Ud5YO6u9IGU1m2vhycdjvDmO_Kp1qASJl_BlqmTIcARMjyl9Eu1aTJu7_09liFRmlEPPXhIylmmjGkiFTClFiyIGgIrW8_bDinJJURDjtwBCijP3ZR6YLA2DT7fU3iCFCeHZ7FzcyC_JoTQEITMU2MheEqfpt_2zHLzqjhqakNQgdznErqmRrEuwXQMw-cO4uJhOY5-bv6pQJ-rdtGZcqxzLmKswg0rjoPdgXbpPxlPv7bId-36N8ccJsDmtz-sFBFk0HkCHUvjaEFgSg6Ho05jlPh_DzYNtMN6PQzfVt0T7r5-UFYdKWVtAtePhaM3Q-MIsVraYquVAllmhhsM0XLUJl-XjNHApdDmi5Ny0V6kd_Y5FjeYl6RSejVmyLX7b_IN9SXMtA4fgbyZypaphdtqxjCV5DlR3YtFknz0trVkpRpc5mZw5xu5uLIS9K7GF3NiTwKedjdBVFuwCWE3PTgAmuWDS6oRVy9EjcwqzTUsRB9WhX548wXmrLntwGyMdQWOWGsaZH1s0bySuK0aUfRkJ39SEfQiYinqkvzgGTdZBwMR2ftYe3mHlVEv0a8MXpeOhBsEEWiBWEFDPp9GrCTYS6yw',
		);

		expect(miraiConnection.chains).toContain('0x38');
		expect(miraiConnection.chains).toContain('0x893');
		expect(miraiConnection.namespace).toBe('eip155');
		expect(miraiConnection.topicId).toBeTruthy();

		console.log(miraiConnection.topicId);
	});

	// beforeEach(() => {
	// 	delay(() => {}, 5000);
	// });

	test('Initialized Sign Provider', async () => {
		await miraiSignCore.showConnectionModal(miraiConnection);
		miraiSignProvider = await miraiConnection.getProvider();
		// In-case rejected
		expect(miraiSignProvider).toBeNull();

		// In-case approved
	});

	test('Checking connection pool', async () => {
		expect(Object.keys(miraiSignCore.connections).length).toBe(1);

		// miraiConnection = await miraiSignCore.connect({ accessToken: 'accesstoken_2' });
		// miraiConnection = await miraiSignCore.connect({ accessToken: 'accesstoken_3' });
		// miraiConnection = await miraiSignCore.connect({ accessToken: 'accesstoken_4' });
		// miraiConnection = await miraiSignCore.connect({ accessToken: 'accesstoken_5' });

		// expect(Object.keys(miraiSignCore.connections).length).toBe(5);
		// expect(topicConnected.length).toBe(5);
	});
});
