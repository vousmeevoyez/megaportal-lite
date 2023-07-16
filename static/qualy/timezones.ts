export type QualysTimezone = {
	TIME_ZONE_CODE: string;
	TIME_ZONE_DETAILS: { __cdata: string };
	DST_SUPPORTED: number;
};
export const QualysTimezones: { TIME_ZONES: QualysTimezone[] } = {
	TIME_ZONES: [
		{
			TIME_ZONE_CODE: 'AS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -11:00) American Samoa',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'UM2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -11:00) Midway Islands (U.S.)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -11:00) Niue',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -10:00) Cook Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PF2A',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -10:00) French Polynesia, Austral Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PF',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -10:00) French Polynesia, Society Islands (including Tahiti)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PF2B',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -10:00) French Polynesia, Tuamotu Archipelago',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'UM1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -10:00) Johnston Atoll (U.S.)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'US-AK1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -10:00) United States, Alaska (Aleutian Islands)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-HI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -10:00) United States, Hawaii',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PF1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -09:30) French Polynesia, Marquesas Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PF3',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -09:00) French Polynesia, Gambier Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'US-AK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -09:00) United States, Alaska',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-BC',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -08:00) Canada, British Columbia (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-YT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -08:00) Canada, Yukon (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-BCN1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -08:00) Mexico, Baja California (Border Region) (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'America/Los_Angeles',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -08:00) United States, California (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-ID1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -08:00) United States, Idaho (northern) (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -08:00) United States, Nevada (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-OR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -08:00) United States, Oregon (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-WA',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -08:00) United States, Washington (Pacific Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-BCN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -08:00) Mexico, Baja California',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -08:00) Pitcairn',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CA-AB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) Canada, Alberta (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-BC1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) Canada, British Columbia (exception 1) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CA-BC2',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) Canada, British Columbia (exception 2) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-NT',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) Canada, Northwest Territories (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-NT2C',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) Canada, Nunavut (Mountain) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-SK1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) Canada, Saskatchewan (exceptions - west) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-CHH1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) Mexico, Chihuahua (Border Region) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-AZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) United States, Arizona (Mountain Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'US-AZ1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Arizona (Navajo Reservation) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-CO',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Colorado (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-ID',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Idaho (southern) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-KS1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Kansas (exception) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) United States, Montana (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NE1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Nebraska (western) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NV1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Nevada (exception) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NM',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, New Mexico (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-ND1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, North Dakota (western) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-OR1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Oregon (exception) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-SD1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, South Dakota (western) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-TX1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -07:00) United States, Texas (far west) (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-UT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) United States, Utah (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-WY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) United States, Wyoming (Mountain Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-BCS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) Mexico, Baja California Sur',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-CHH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) Mexico, Chihuahua',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-NAY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) Mexico, Nayarit',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-SIN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) Mexico, Sinaloa',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-SON',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -07:00) Mexico, Sonora',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CA-MB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Canada, Manitoba (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-NT2B',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) Canada, Nunavut (Central) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-ON1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) Canada, Ontario (western) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-SK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Canada, Saskatchewan (Central Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CA-SK2',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) Canada, Saskatchewan (exceptions - east) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-COA1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) Mexico, Coahuila (Border Region) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-NLE1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) Mexico, Nuevo León (Border Region) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-TAM1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) Mexico, Tamaulipas (Border Region) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-AL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Alabama (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-AR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Arkansas (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-FL1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Florida (far west) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-IL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Illinois (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-IN1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Indiana (far west) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-IA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Iowa (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-KS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Kansas (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-KY1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Kentucky (western) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-LA',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Louisiana (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MI1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Michigan (exception) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MN',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Minnesota (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MS',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Mississippi (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Missouri (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Nebraska (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-ND',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, North Dakota (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-OK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Oklahoma (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-SD',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, South Dakota (eastern) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-TN',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Tennessee (western) (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-TX',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) United States, Texas (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-WI',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) United States, Wisconsin (Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CL2',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -06:00) Chile - Easter Island (Easter Island Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Belize',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Costa Rica',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'EC2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Ecuador - Galapagos Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) El Salvador',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Guatemala',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'HN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Honduras',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MX-AGU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Aguascalientes',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-CAM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Campeche',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-CHP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Chiapas',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-COA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Coahuila',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-COL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Colima',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-DIF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Distrito Federal',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-DUR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Durango',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-GUA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Guanajuato',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-GRO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Guerrero',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-HID',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Hidalgo',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-JAL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Jalisco',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-MEX',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Mexico State',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-MIC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Michoacán',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-MOR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Morelos',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-NAY1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Nayarit (Exception)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-NLE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Nuevo León',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-OAX',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Oaxaca',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-PUE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Puebla',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-QUE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Querétaro',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-SLP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, San Luis Potosí',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-TAB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Tabasco',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-TAM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Tamaulipas',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-TLA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Tlaxcala',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-VER',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Veracruz',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-YUC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Yucatan',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MX-ZAC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Mexico, Zacatecas',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'NI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -06:00) Nicaragua',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-AC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Brazil, Acre (Amazon Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CA-NT2A',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) Canada, Nunavut - Southampton Island (Central Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Bahamas (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-NT2',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) Canada, Nunavut (Eastern) (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-ON',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Canada, Ontario (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-QC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Canada, Quebec (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'HT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Haiti (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-CT',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, Connecticut (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-DE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Delaware (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-DC',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, District of Columbia (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-FL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Florida (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-GA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Georgia (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-IN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Indiana (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-KY',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, Kentucky (eastern) (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-ME',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Maine (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Maryland (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MA',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, Massachusetts (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-MI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Michigan (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NH',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, New Hampshire (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NJ',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, New Jersey (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, New York (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-NC',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, North Carolina (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-OH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Ohio (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-PA',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, Pennsylvania (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-RI',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, Rhode Island (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-SC',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, South Carolina (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-TN1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, Tennessee (eastern) (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-VT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Vermont (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-VA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) United States, Virginia (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'US-WV',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -05:00) United States, West Virginia (Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-AM1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Brazil, Amazonas (far west)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Cayman Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Colombia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Cuba',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'EC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Ecuador',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'JM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Jamaica',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MX-ROO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Mexico, Quintana Roo',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Panama',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Peru',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -05:00) Turks and Caicos Islands',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-AM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Brazil, Amazonas (Amazon Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-MT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Brazil, Mato Grosso (Amazon Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-MS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Brazil, Mato Grosso do Sul (Amazon Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-RO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Brazil, Rondonia (Amazon Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-RR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Brazil, Roraima (Amazon Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Bermuda (Atlantic Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Canada, Labrador (Atlantic Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-NB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Canada, New Brunswick (Atlantic Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-NS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Canada, Nova Scotia (Atlantic Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-PE',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -04:00) Canada, Prince Edward Island (Atlantic Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-QC1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -04:00) Canada, Quebec (far east) (Atlantic Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GL2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Greenland, Pituffik (Atlantic Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Chile (Chile Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'VE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Venezuela (Venezuelan Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Anguilla',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Antigua and Barbuda',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Aruba',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Barbados',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Bolivia, Plurinational State of',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BQ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Bonaire, Sint Eustatius and Saba',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Curaçao',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'DM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Dominica',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'DO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Dominican Republic',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Grenada',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Guadeloupe',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Guyana',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MQ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Martinique',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Montserrat',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Paraguay',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Puerto Rico',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Saint Barthelemy',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Saint Kitts and Nevis',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'LC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Saint Lucia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Saint Martin',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'VC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Saint Vincent and The Grenadines',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SX',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Sint Maarten (Dutch part)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Trinidad and Tobago',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'VG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Virgin Islands (British)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'VI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -04:00) Virgin Islands (U.S.)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CA2A',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -03:30) Canada, Labrador (exception) (Newfoundland Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CA-NF',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -03:30) Canada, Newfoundland (Newfoundland Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-AL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Alagoas (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-AP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Amapa (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-BA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Bahia (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-CE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Ceara (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-DF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Distrito Federal (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-ES',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Espirto Santo (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-GO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Goias (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-MA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Maranhao (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-MT1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -03:00) Brazil, Mato Grosso (Araguaia region) (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-MG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Minas Gerais (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-PA1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Para (eastern) (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-PA2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Para (western) (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-PB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Paraiba (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-PR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Parana (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-PE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Pernambuco (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-PI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Piaui (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-RN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Rio Grande do Norte (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-RS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Rio Grande do Sul (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-RJ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Rio de Janeiro (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-SC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Santa Catarina (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-SP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Sao Paulo (Brasilia Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BR-SE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Sergipe (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-TO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Brazil, Tocantins (Brasilia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AQ-AI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Antarctica, Anvers Island (Chile Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-BA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Buenos Aires',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-CT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Catamarca',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-CC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Chaco',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-CH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Chubut',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-DF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Ciudad de Buenos Aires',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-CN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Corrientes',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-CB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Córdoba',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-ER',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Entre Rios',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-FM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Formosa',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-JY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Jujuy',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-LP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, La Pampa',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-LR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, La Rioja',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-MZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Mendoza',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-MN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Misiones',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-NQ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Neuquén',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-RN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Rio Negro',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-SA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Salta',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-SJ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, San Juan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-SL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, San Luis',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-SC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Santa Cruz',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-SF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Santa Fe',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-SE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Santiago del Estero',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-TF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Tierra del Fuego',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AR-TM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Argentina, Tucumán',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'FK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Falkland Islands (Malvinas)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) French Guiana',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Greenland, Greenland',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Saint Pierre and Miquelon',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'SR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Suriname',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'UY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -03:00) Uruguay',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BR-FN',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -02:00) Brazil, Fernando de Noronha (Fernando de Noronha Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GS',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT -02:00) South Georgia and the South Sandwich Islands (South Georgia Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -01:00) Cabo Verde',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GL3',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -01:00) Greenland, Ittoqqortoormiit',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PT2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT -01:00) Portugal, Azores',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'IE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Ireland (Greenwich Mean Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'GB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) United Kingdom (Greenwich Mean Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'FO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Faroe Islands (Western European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PT1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +00:00) Portugal, Madeira Islands (Western European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Portugal (Western European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'ES2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Spain, Canary Islands (Western European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'UTC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) (UTC/GMT)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Burkina Faso',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CI',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +00:00) Cote D'Ivoire`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Gambia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Ghana',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GL4',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Greenland, Danmarkshavn',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Guernsey',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'GN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Guinea',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Guinea-Bissau',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'IS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Iceland',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'IM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Isle of Man',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'JE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Jersey',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'LR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Liberia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ML',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Mali',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Mauritania',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Morocco',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'SH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Saint Helena, Ascension and Tristan da Cunha',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Senegal',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Sierra Leone',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Togo',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'EH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +00:00) Western Sahara',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Albania (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Andorra (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Austria (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Belgium (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Bosnia and Herzegovina (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'HR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Croatia (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Czech Republic (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'DK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Denmark (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'FR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) France (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'DE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Germany (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'GI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Gibraltar (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'VA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Holy See (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'HU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Hungary (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'IT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Italy (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'LI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Liechtenstein (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'LU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Luxembourg (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MK',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +01:00) Macedonia, The Former Yugoslav Republic Of (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Malta (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Monaco (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'ME',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Montenegro (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'NL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Netherlands (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'NO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Norway (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Poland (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'SM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) San Marino (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'RS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Serbia (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'SK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Slovakia (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'SI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Slovenia (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'ES',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +01:00) Spain, Mainland, Baleares, Melilla, Ceuta (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'SJ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Svalbard and Jan Mayen (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'SE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Sweden (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Switzerland (Central European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'DZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Algeria',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Angola',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BJ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Benin',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Cameroon',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Central African Republic',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Chad',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Congo',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Congo, Democratic Republic of, (Western)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GQ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Equatorial Guinea',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Gabon',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Niger',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Nigeria',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ST',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Sao Tome and Principe',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +01:00) Tunisia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Sudan (Central Africa Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Bulgaria (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'CY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Cyprus (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'EE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Estonia (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'FI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Finland (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'GR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Greece (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'LV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Latvia (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'LT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Lithuania (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'MD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Moldova, Republic of (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'RO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Romania (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'UA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Ukraine (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AX',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Åland Islands (Eastern European Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'RU-KGD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Russia, Kaliningrad (Kaliningrad Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CY2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Cyprus, Northern (Turkey Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'BW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Botswana',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Burundi',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CD2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Congo, Democratic Republic of, (Eastern)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'EG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Egypt',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'IL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Israel',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'JO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Jordan',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'LB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Lebanon',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'LS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Lesotho',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'LY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Libya',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Malawi',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Mozambique',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Namibia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PS1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Palestine, State of, Gaza Strip',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Palestine, State of, West Bank',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'RW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Rwanda',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ZA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) South Africa',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Swaziland',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Syrian Arab Republic',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'ZM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Zambia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ZW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +02:00) Zimbabwe',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Turkey (Eastern European Summer Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-AD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Adygea (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ARK',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +03:00) Russia, Arkhangel' (Moscow Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-BEL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Belgorod (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-BRY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Bryansk (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-CE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Chechnya (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-CU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Chuvashia (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-DA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Dagestan (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-IN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Ingushetia (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-IVA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Ivanovo (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Kabardino-Balkaria (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Kalmykia (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KLU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Kaluga (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Karachay-Cherkessia (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Karelia (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KIR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Kirov (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Komi (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KOS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Kostroma (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KDA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Krasnodar (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KRS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Kursk (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-LEN',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +03:00) Russia, Leningradskaya Oblast' (Moscow Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-LIP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Lipetsk (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ME',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Mari El (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-MO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Mordovia (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-MOW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Moscow City (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-RC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Moscow Time (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-MOS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Moskva (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-MUR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Murmansk (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-NEN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Nenets (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-NIZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Nizhniy Novgorod (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, North Ossetia-Alania (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-NGR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Novgorod (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ORL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Orel (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-PNZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Penza (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-PSK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Pskov (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ROS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Rostov (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-RYA',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +03:00) Russia, Ryazan' (Moscow Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SEV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Sevastopol (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SMO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Smolensk (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SPE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, St. Petersburg City (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-STA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Stavropol (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-TAM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Tambov (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-TA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Tatarstan (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-TUL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Tula (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-TVE',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +03:00) Russia, Tver' (Moscow Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-VLA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Vladimir (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-VGG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Volgograd (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-VLG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Vologda (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-VOR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Russia, Voronezh (Moscow Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-YAR',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +03:00) Russia, Yaroslavl' (Moscow Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AQ-EL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Antarctica, Enderby Land (Syowa Station Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Bahrain',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Belarus',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Comoros',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'DJ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Djibouti',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ER',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Eritrea',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ET',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Ethiopia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'IQ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Iraq',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Kenya',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Kuwait',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Madagascar',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'YT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Mayotte',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'QA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Qatar',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Saudi Arabia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Somalia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) South Sudan, Republic of',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Tanzania, United Republic of',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'UG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Uganda',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'YE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:00) Yemen',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'IR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +03:30) Iran, Islamic Republic of',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Azerbaijan (Azerbaijan Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SAR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Russia, Saratov (MSK+1)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-AST',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +04:00) Russia, Astrakhan' (Moscow Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ULY',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +04:00) Russia, Ul'yanovsk (Moscow Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SAM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Russia, Samara (Samara Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-UD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Russia, Udmurtia (Samara Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Armenia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Georgia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Mauritius',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'OM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Oman',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Reunion',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) Seychelles',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:00) United Arab Emirates',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +04:30) Afghanistan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AQ-HB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Antarctica, Holme Bay (Mawson Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-BA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Bashkortostan (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-CHE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Chelyabinsk (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KHM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Khanty-Mansi (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KGN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Kurgan (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ORE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Orenburg (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-PER',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Perm (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SVE',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Sverdlovsk (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-TYU',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +05:00) Russia, Tyumen' (Yekaterinburg Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-YAN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Russia, Yamalo-Nenets (Yekaterinburg Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KZ1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Kazakhstan, (Western)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Maldives',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Pakistan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TJ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Tajikistan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Turkmenistan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'UZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:00) Uzbekistan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'IN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:30) India',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'LK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:30) Sri Lanka',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +05:45) Nepal',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-OMS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:00) Russia, Omsk (Omsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AQ-LV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:00) Antarctica, Lake Vostok (Vostok Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BD',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:00) Bangladesh',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:00) Bhutan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:00) Kazakhstan, (Eastern)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:00) Kyrgyzstan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:30) Cocos (Keeling) Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +06:30) Myanmar',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AQ-VH',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +07:00) Antarctica, Vestfold Hills (Davis Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KEM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Kemerovo (Krasnoyarsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Khakassia (Krasnoyarsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KYA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Krasnoyarsk (Krasnoyarsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-TY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Tuva (Krasnoyarsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-NVS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Novosibirsk (Novosibirsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-AL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Altai Republic (Omsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ALT',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Altaskiy Kray (Omsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-TOM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Russia, Tomsk (Omsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ID',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +07:00) Indonesia, (Western) (Waktu Indonesia Barat (West Indonesian Time))',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Cambodia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CX',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Christmas Island (Indian Ocean)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'LA',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +07:00) Lao People's Democratic Republic`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MN1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Mongolia, (Western)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Thailand',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'VN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +07:00) Viet Nam',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AU-WA',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +08:00) Australia, Western Australia (Australian Western Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'CN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) China (Beijing Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-BU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Russia, Buryatia (Irkutsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-IRK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Russia, Irkutsk (Irkutsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ID2',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +08:00) Indonesia, (Central) (Waktu Indonesia Tengah (Central Indonesian Time))',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'BN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Brunei Darussalam',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'HK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Hong Kong',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Macao',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MY',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Malaysia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MN',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Mongolia, (Central and Eastern)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Philippines',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Singapore',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:00) Taiwan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:30) North Korea (Pyongyang Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AU-WA1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +08:45) Australia, Western Australia (Exception)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'ID3',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +09:00) Indonesia, (Eastern) (Waktu Indonesia Timur (East Indonesian Time))',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-ZAB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +09:00) Russia, Zabaykalsky (Yakustk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-AMU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +09:00) Russia, Amur (Yakutsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +09:00) Russia, Sakha (Western) (Yakutsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'JP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +09:00) Japan',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PW',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +09:00) Palau',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +09:00) South Korea',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'TL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +09:00) Timor-Leste',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AU3',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +09:30) Australia, New South Wales (exception) (Australian Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AU-NT',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +09:30) Australia, Northern Territory (Australian Central Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AU-SA',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +09:30) Australia, South Australia (Australian Central Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AU-ACT',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +10:00) Australia, Australian Capital Territory (Australian Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AU-NSW',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +10:00) Australia, New South Wales (Australian Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AU-QLD',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +10:00) Australia, Queensland (Australian Eastern Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AU-TAS',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +10:00) Australia, Tasmania (Australian Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AU-VIC',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +10:00) Australia, Victoria (Australian Eastern Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'AQ-AL',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Antarctica, Adelie Land (Durmont Durville Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-YEV',
			TIME_ZONE_DETAILS: {
				__cdata: `(GMT +10:00) Russia, Jewish Autonomous Oblast' (Vladivostok Time)`,
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KHA',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Russia, Khabarovsk (Vladivostok Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-PRI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Russia, Primorskiy (Vladivostok Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SA2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Russia, Sakha (Central) (Vladivostok Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'GU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Guam',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'FM1',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Micronesia, Federated States Of, Yap, Chuuk',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MP',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Northern Mariana Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'PG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +10:00) Papua New Guinea',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AU1',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +10:30) Australia, Lord Howe Island (Lord Howe Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'PG-NSB',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +11:00) Papua New Guinea, Bougainville (Bougainville Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AQ-BP',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +11:00) Antarctica, Bailey Peninsula (Casey Standard Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-MAG',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +11:00) Russia, Magadan (Magadan Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +11:00) Norfolk Island (Norfolk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SA3',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +11:00) Russia, Sakha (Eastern) (Srednekolymsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SAK2',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +11:00) Russia, Sakhalin (Kuril Islands) (Srednekolymsk Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-SAK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +11:00) Russia, Sakhalin (Vladivostok Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'FM',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +11:00) Micronesia, Federated States Of, Kosrae, Pohnpei',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NC',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +11:00) New Caledonia',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'SB',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +11:00) Solomon Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'VU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +11:00) Vanuatu',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-CHU',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Russia, Chukot (Kamchatka Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'RU-KAM',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Russia, Kamchatka (Kamchatka Time)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'AQ-SP',
			TIME_ZONE_DETAILS: {
				__cdata:
					'(GMT +12:00) Antarctica, South Pole (New Zealand Standard Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'FJ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Fiji',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'KI',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Kiribati, Gilbert Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'MH',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Marshall Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NR',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Nauru',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NZ',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) New Zealand',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'TV',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Tuvalu',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'UM3',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Wake Island (U.S.)',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'WF',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:00) Wallis and Futuna',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'NZ2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +12:45) New Zealand - Chatham Islands',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'TO',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +13:00) Tonga (Tonga Time)',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'KI3',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +13:00) Kiribati, Phoenix Islands',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'WS',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +13:00) Samoa',
			},
			DST_SUPPORTED: 1,
		},
		{
			TIME_ZONE_CODE: 'TK',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +13:00) Tokelau',
			},
			DST_SUPPORTED: 0,
		},
		{
			TIME_ZONE_CODE: 'KI2',
			TIME_ZONE_DETAILS: {
				__cdata: '(GMT +14:00) Kiribati, Line Islands',
			},
			DST_SUPPORTED: 0,
		},
	],
};
