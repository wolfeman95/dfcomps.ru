import { CountryInterface } from '../interfaces/country.interface';

export class COUNTRIES_CONFIG {
  public static readonly SPRITE_COLUMN_WIDTH = 18;
  public static readonly SPRITE_ROW_HEIGHT = 13;

  public static get COUNTRIES(): CountryInterface[] {
    return [
      { fullName: 'Afghanistan', shortName: 'af', col: 3, row: 1 },
      { fullName: 'Albania', shortName: 'al', col: 6, row: 1 },
      { fullName: 'Algeria', shortName: 'dz', col: 9, row: 4 },
      { fullName: 'American Samoa', shortName: 'as', col: 11, row: 1 },
      { fullName: 'Andorra', shortName: 'ad', col: 1, row: 1 },
      { fullName: 'Angola', shortName: 'ao', col: 9, row: 1 },
      { fullName: 'Anguilla', shortName: 'ai', col: 5, row: 1 },
      { fullName: 'Antigua and Barbuda', shortName: 'ag', col: 4, row: 1 },
      { fullName: 'Argentina', shortName: 'ar', col: 10, row: 1 },
      { fullName: 'Armenia', shortName: 'am', col: 7, row: 1 },
      { fullName: 'Aruba', shortName: 'aw', col: 14, row: 1 },
      { fullName: 'Australia', shortName: 'au', col: 13, row: 1 },
      { fullName: 'Austria', shortName: 'at', col: 12, row: 1 },
      { fullName: 'Azerbaijan', shortName: 'az', col: 15, row: 1 },
      { fullName: 'Bahrain', shortName: 'bh', col: 6, row: 2 },
      { fullName: 'Bangladesh', shortName: 'bd', col: 2, row: 2 },
      { fullName: 'Barbados', shortName: 'bb', col: 1, row: 2 },
      { fullName: 'Belarus', shortName: 'by', col: 16, row: 2 },
      { fullName: 'Belgium', shortName: 'be', col: 3, row: 2 },
      { fullName: 'Belize', shortName: 'bz', col: 1, row: 3 },
      { fullName: 'Benin', shortName: 'bj', col: 8, row: 2 },
      { fullName: 'Bermuda', shortName: 'bm', col: 9, row: 2 },
      { fullName: 'Bhutan', shortName: 'bt', col: 14, row: 2 },
      { fullName: 'Bolivia', shortName: 'bo', col: 11, row: 2 },
      { fullName: 'Bosnia and Herzegovina', shortName: 'ba', col: 16, row: 1 },
      { fullName: 'Botswana', shortName: 'bw', col: 15, row: 2 },
      { fullName: 'Brazil', shortName: 'br', col: 12, row: 2 },
      { fullName: 'British Indian Ocean Territory', shortName: 'io', col: 2, row: 7 },
      { fullName: 'British Virgin Islands', shortName: 'vg', col: 16, row: 14 },
      { fullName: 'Brunei', shortName: 'bn', col: 10, row: 2 },
      { fullName: 'Bulgaria', shortName: 'bg', col: 5, row: 2 },
      { fullName: 'Burkina Faso', shortName: 'bf', col: 4, row: 2 },
      { fullName: 'Burma', shortName: 'mm', col: 8, row: 9 },
      { fullName: 'Burundi', shortName: 'bi', col: 7, row: 2 },
      { fullName: 'Cambodia', shortName: 'kh', col: 12, row: 7 },
      { fullName: 'Cameroon', shortName: 'cm', col: 11, row: 3 },
      { fullName: 'Canada', shortName: 'ca', col: 2, row: 3 },
      { fullName: 'Cape Verde', shortName: 'cv', col: 16, row: 3 },
      { fullName: 'Cayman Islands', shortName: 'ky', col: 3, row: 8 },
      { fullName: 'Central African Republic', shortName: 'cf', col: 5, row: 3 },
      { fullName: 'Chad', shortName: 'td', col: 9, row: 13 },
      { fullName: 'Chile', shortName: 'cl', col: 10, row: 3 },
      { fullName: 'Christmas Island', shortName: 'cx', col: 1, row: 4 },
      { fullName: 'Cocos (Keeling) Islands', shortName: 'cc', col: 3, row: 3 },
      { fullName: 'Colombia', shortName: 'co', col: 13, row: 3 },
      { fullName: 'Comoros', shortName: 'km', col: 14, row: 7 },
      { fullName: 'Cook Islands', shortName: 'ck', col: 9, row: 3 },
      { fullName: 'Costa Rica', shortName: 'cr', col: 14, row: 3 },
      { fullName: "Cote d'Ivoire", shortName: 'ci', col: 8, row: 3 },
      { fullName: 'Croatia', shortName: 'hr', col: 11, row: 6 },
      { fullName: 'Cuba', shortName: 'cu', col: 15, row: 3 },
      { fullName: 'Cyprus', shortName: 'cy', col: 2, row: 4 },
      { fullName: 'Czech Republic', shortName: 'cz', col: 3, row: 4 },
      { fullName: 'Democratic Republic of the Congo', shortName: 'cd', col: 4, row: 3 },
      { fullName: 'Denmark', shortName: 'dk', col: 6, row: 4 },
      { fullName: 'Djibouti', shortName: 'dj', col: 5, row: 4 },
      { fullName: 'Dominica', shortName: 'dm', col: 7, row: 4 },
      { fullName: 'Dominican Republic', shortName: 'do', col: 8, row: 4 },
      { fullName: 'East Timor', shortName: 'tl', col: 15, row: 13 },
      { fullName: 'Ecuador', shortName: 'ec', col: 10, row: 4 },
      { fullName: 'Egypt', shortName: 'eg', col: 12, row: 4 },
      { fullName: 'El Salvador', shortName: 'sv', col: 5, row: 13 },
      { fullName: 'Equatorial Guinea', shortName: 'gq', col: 2, row: 6 },
      { fullName: 'Eritrea', shortName: 'er', col: 14, row: 4 },
      { fullName: 'Estonia', shortName: 'ee', col: 11, row: 4 },
      { fullName: 'Ethiopia', shortName: 'et', col: 16, row: 4 },
      { fullName: 'Falkland Islands', shortName: 'fk', col: 3, row: 5 },
      { fullName: 'Faroe Islands', shortName: 'fo', col: 5, row: 5 },
      { fullName: 'Federated States of Micronesia', shortName: 'fm', col: 4, row: 5 },
      { fullName: 'Fiji', shortName: 'fj', col: 2, row: 5 },
      { fullName: 'Finland', shortName: 'fi', col: 1, row: 5 },
      { fullName: 'France', shortName: 'fr', col: 6, row: 5 },
      { fullName: 'French Guiana', shortName: 'gf', col: 11, row: 5 },
      { fullName: 'French Polynesia', shortName: 'pf', col: 4, row: 11 },
      { fullName: 'French Southern and Antarctic Lands', shortName: 'tf', col: 10, row: 13 },
      { fullName: 'Gabon', shortName: 'ga', col: 7, row: 5 },
      { fullName: 'Georgia', shortName: 'ge', col: 10, row: 5 },
      { fullName: 'Germany', shortName: 'de', col: 4, row: 4 },
      { fullName: 'Ghana', shortName: 'gh', col: 12, row: 5 },
      { fullName: 'Gibraltar', shortName: 'gi', col: 13, row: 5 },
      { fullName: 'Greece', shortName: 'gr', col: 3, row: 6 },
      { fullName: 'Greenland', shortName: 'gl', col: 14, row: 5 },
      { fullName: 'Grenada', shortName: 'gd', col: 9, row: 5 },
      { fullName: 'Guadeloupe', shortName: 'gp', col: 1, row: 6 },
      { fullName: 'Guam', shortName: 'gu', col: 6, row: 6 },
      { fullName: 'Guatemala', shortName: 'gt', col: 5, row: 6 },
      { fullName: 'Guinea', shortName: 'gn', col: 16, row: 5 },
      { fullName: 'Guinea-Bissau', shortName: 'gw', col: 7, row: 6 },
      { fullName: 'Guyana', shortName: 'gy', col: 8, row: 6 },
      { fullName: 'Haiti', shortName: 'ht', col: 12, row: 6 },
      { fullName: 'Honduras', shortName: 'hn', col: 10, row: 6 },
      { fullName: 'Hong Kong', shortName: 'hk', col: 9, row: 6 },
      { fullName: 'Hungary', shortName: 'hu', col: 13, row: 6 },
      { fullName: 'Iceland', shortName: 'is', col: 5, row: 7 },
      { fullName: 'India', shortName: 'in', col: 1, row: 7 },
      { fullName: 'Indonesia', shortName: 'id', col: 14, row: 6 },
      { fullName: 'Iran', shortName: 'ir', col: 4, row: 7 },
      { fullName: 'Iraq', shortName: 'iq', col: 3, row: 7 },
      { fullName: 'Israel', shortName: 'il', col: 16, row: 6 },
      { fullName: 'Italy', shortName: 'it', col: 6, row: 7 },
      { fullName: 'Jamaica', shortName: 'jm', col: 7, row: 7 },
      { fullName: 'Japan', shortName: 'jp', col: 9, row: 7 },
      { fullName: 'Jordan', shortName: 'jo', col: 8, row: 7 },
      { fullName: 'Kazakhstan', shortName: 'kz', col: 4, row: 8 },
      { fullName: 'Kenya', shortName: 'ke', col: 10, row: 7 },
      { fullName: 'Kiribati', shortName: 'ki', col: 13, row: 7 },
      { fullName: 'Kuwait', shortName: 'kw', col: 2, row: 8 },
      { fullName: 'Kyrgyzstan', shortName: 'kg', col: 11, row: 7 },
      { fullName: 'Laos', shortName: 'la', col: 5, row: 8 },
      { fullName: 'Latvia', shortName: 'lv', col: 14, row: 8 },
      { fullName: 'Lebanon', shortName: 'lb', col: 6, row: 8 },
      { fullName: 'Lesotho', shortName: 'ls', col: 11, row: 8 },
      { fullName: 'Liberia', shortName: 'lr', col: 10, row: 8 },
      { fullName: 'Libya', shortName: 'ly', col: 15, row: 8 },
      { fullName: 'Liechtenstein', shortName: 'li', col: 8, row: 8 },
      { fullName: 'Lithuania', shortName: 'lt', col: 12, row: 8 },
      { fullName: 'Luxembourg', shortName: 'lu', col: 13, row: 8 },
      { fullName: 'Macau', shortName: 'mo', col: 10, row: 9 },
      { fullName: 'Madagascar', shortName: 'mg', col: 4, row: 9 },
      { fullName: 'Malawi', shortName: 'mw', col: 2, row: 10 },
      { fullName: 'Malaysia', shortName: 'my', col: 4, row: 10 },
      { fullName: 'Maldives', shortName: 'mv', col: 1, row: 10 },
      { fullName: 'Mali', shortName: 'ml', col: 7, row: 9 },
      { fullName: 'Malta', shortName: 'mt', col: 15, row: 9 },
      { fullName: 'Marshall Islands', shortName: 'mh', col: 5, row: 9 },
      { fullName: 'Martinique', shortName: 'mq', col: 12, row: 9 },
      { fullName: 'Mauritania', shortName: 'mr', col: 13, row: 9 },
      { fullName: 'Mauritius', shortName: 'mu', col: 16, row: 9 },
      { fullName: 'Mayotte', shortName: 'yt', col: 7, row: 15 },
      { fullName: 'Mexico', shortName: 'mx', col: 3, row: 10 },
      { fullName: 'Moldova', shortName: 'md', col: 2, row: 9 },
      { fullName: 'Monaco', shortName: 'mc', col: 1, row: 9 },
      { fullName: 'Mongolia', shortName: 'mn', col: 9, row: 9 },
      { fullName: 'Montenegro', shortName: 'me', col: 3, row: 9 },
      { fullName: 'Montserrat', shortName: 'ms', col: 14, row: 9 },
      { fullName: 'Morocco', shortName: 'ma', col: 16, row: 8 },
      { fullName: 'Mozambique', shortName: 'mz', col: 5, row: 10 },
      { fullName: 'Namibia', shortName: 'na', col: 6, row: 10 },
      { fullName: 'Nauru', shortName: 'nr', col: 14, row: 10 },
      { fullName: 'Netherlands', shortName: 'nl', col: 12, row: 10 },
      { fullName: 'Netherlands Antilles', shortName: 'an', col: 8, row: 1 },
      { fullName: 'New Caledonia', shortName: 'nc', col: 7, row: 10 },
      { fullName: 'New Zealand', shortName: 'nz', col: 16, row: 10 },
      { fullName: 'Nicaragua', shortName: 'ni', col: 11, row: 10 },
      { fullName: 'Niger', shortName: 'ne', col: 8, row: 10 },
      { fullName: 'Nigeria', shortName: 'ng', col: 10, row: 10 },
      { fullName: 'Niue', shortName: 'nu', col: 15, row: 10 },
      { fullName: 'Norfolk Island', shortName: 'nf', col: 9, row: 10 },
      { fullName: 'North Korea', shortName: 'kp', col: 16, row: 7 },
      { fullName: 'Northern Mariana Islands', shortName: 'mp', col: 11, row: 9 },
      { fullName: 'Norway', shortName: 'no', col: 13, row: 10 },
      { fullName: 'Oman', shortName: 'om', col: 1, row: 11 },
      { fullName: 'Pakistan', shortName: 'pk', col: 7, row: 11 },
      { fullName: 'Palau', shortName: 'pw', col: 14, row: 11 },
      { fullName: 'Palestinian territories', shortName: 'ps', col: 12, row: 11 },
      { fullName: 'Panama', shortName: 'pa', col: 2, row: 11 },
      { fullName: 'Papua New Guinea', shortName: 'pg', col: 5, row: 11 },
      { fullName: 'Paraguay', shortName: 'py', col: 15, row: 11 },
      { fullName: 'Peoples Republic of China', shortName: 'cn', col: 12, row: 3 },
      { fullName: 'Peru', shortName: 'pe', col: 3, row: 11 },
      { fullName: 'Philippines', shortName: 'ph', col: 6, row: 11 },
      { fullName: 'Pitcairn Islands', shortName: 'pn', col: 10, row: 11 },
      { fullName: 'Poland', shortName: 'pl', col: 8, row: 11 },
      { fullName: 'Portugal', shortName: 'pt', col: 13, row: 11 },
      { fullName: 'Puerto Rico', shortName: 'pr', col: 11, row: 11 },
      { fullName: 'Qatar', shortName: 'qa', col: 16, row: 11 },
      { fullName: 'Republic of China', shortName: 'tw', col: 6, row: 14 },
      { fullName: 'Republic of Ireland', shortName: 'ie', col: 15, row: 6 },
      { fullName: 'Republic of Macedonia', shortName: 'mk', col: 6, row: 9 },
      { fullName: 'Republic of the Congo', shortName: 'cg', col: 6, row: 3 },
      { fullName: 'Romania', shortName: 'ro', col: 2, row: 12 },
      { fullName: 'Russia', shortName: 'ru', col: 4, row: 12 },
      { fullName: 'Rwanda', shortName: 'rw', col: 5, row: 12 },
      { fullName: 'Saint Helena', shortName: 'sh', col: 12, row: 12 },
      { fullName: 'Saint Kitts and Nevis', shortName: 'kn', col: 15, row: 7 },
      { fullName: 'Saint Lucia', shortName: 'lc', col: 7, row: 8 },
      { fullName: 'Saint Pierre and Miquelon', shortName: 'pm', col: 9, row: 11 },
      { fullName: 'Saint Vincent and the Grenadines', shortName: 'vc', col: 14, row: 14 },
      { fullName: 'Samoa', shortName: 'ws', col: 5, row: 15 },
      { fullName: 'San Marino', shortName: 'sm', col: 16, row: 12 },
      { fullName: 'Saudi Arabia', shortName: 'sa', col: 6, row: 12 },
      { fullName: 'Senegal', shortName: 'sn', col: 1, row: 13 },
      { fullName: 'Serbia', shortName: 'rs', col: 3, row: 12 },
      { fullName: 'Seychelles', shortName: 'sc', col: 8, row: 12 },
      { fullName: 'Sierra Leone', shortName: 'sl', col: 15, row: 12 },
      { fullName: 'Singapore', shortName: 'sg', col: 11, row: 12 },
      { fullName: 'Slovakia', shortName: 'sk', col: 14, row: 12 },
      { fullName: 'Slovenia', shortName: 'si', col: 13, row: 12 },
      { fullName: 'Solomon Islands', shortName: 'sb', col: 7, row: 12 },
      { fullName: 'Somalia', shortName: 'so', col: 2, row: 13 },
      { fullName: 'South Africa', shortName: 'za', col: 8, row: 15 },
      { fullName: 'South Georgia and the South Sandwich Islands', shortName: 'gs', col: 4, row: 6 },
      { fullName: 'South Korea', shortName: 'kr', col: 1, row: 8 },
      { fullName: 'Spain', shortName: 'es', col: 15, row: 4 },
      { fullName: 'Sri Lanka', shortName: 'lk', col: 9, row: 8 },
      { fullName: 'Sudan', shortName: 'sd', col: 9, row: 12 },
      { fullName: 'Suriname', shortName: 'sr', col: 3, row: 13 },
      { fullName: 'Swaziland', shortName: 'sz', col: 7, row: 13 },
      { fullName: 'Sweden', shortName: 'se', col: 10, row: 12 },
      { fullName: 'Switzerland', shortName: 'ch', col: 7, row: 3 },
      { fullName: 'Syria', shortName: 'sy', col: 6, row: 13 },
      { fullName: 'Tajikistan', shortName: 'tj', col: 13, row: 13 },
      { fullName: 'Tanzania', shortName: 'tz', col: 7, row: 14 },
      { fullName: 'Thailand', shortName: 'th', col: 12, row: 13 },
      { fullName: 'The Bahamas', shortName: 'bs', col: 13, row: 2 },
      { fullName: 'The Gambia', shortName: 'gm', col: 15, row: 5 },
      { fullName: 'Togo', shortName: 'tg', col: 11, row: 13 },
      { fullName: 'Tokelau', shortName: 'tk', col: 14, row: 13 },
      { fullName: 'Tonga', shortName: 'to', col: 2, row: 14 },
      { fullName: 'Trinidad and Tobago', shortName: 'tt', col: 4, row: 14 },
      { fullName: 'Tunisia', shortName: 'tn', col: 1, row: 14 },
      { fullName: 'Turkey', shortName: 'tr', col: 3, row: 14 },
      { fullName: 'Turkmenistan', shortName: 'tm', col: 16, row: 13 },
      { fullName: 'Turks and Caicos Islands', shortName: 'tc', col: 8, row: 13 },
      { fullName: 'Tuvalu', shortName: 'tv', col: 5, row: 14 },
      { fullName: 'Uganda', shortName: 'ug', col: 9, row: 14 },
      { fullName: 'Ukraine', shortName: 'ua', col: 8, row: 14 },
      { fullName: 'United Arab Emirates', shortName: 'ae', col: 2, row: 1 },
      { fullName: 'United Kingdom', shortName: 'gb', col: 8, row: 5 },
      { fullName: 'United States', shortName: 'us', col: 10, row: 14 },
      { fullName: 'United States Virgin Islands', shortName: 'vi', col: 1, row: 15 },
      { fullName: 'Uruguay', shortName: 'uy', col: 11, row: 14 },
      { fullName: 'Uzbekistan', shortName: 'uz', col: 12, row: 14 },
      { fullName: 'Vanuatu', shortName: 'vu', col: 3, row: 15 },
      { fullName: 'Vatican City', shortName: 'va', col: 13, row: 14 },
      { fullName: 'Venezuela', shortName: 've', col: 15, row: 14 },
      { fullName: 'Vietnam', shortName: 'vn', col: 2, row: 15 },
      { fullName: 'Wallis and Futuna', shortName: 'wf', col: 4, row: 15 },
      { fullName: 'Western Sahara', shortName: 'eh', col: 13, row: 4 },
      { fullName: 'Yemen', shortName: 'ye', col: 6, row: 15 },
      { fullName: 'Zambia', shortName: 'zm', col: 9, row: 15 },
      { fullName: 'Zimbabwe', shortName: 'zw', col: 10, row: 15 },
    ];
  }
}
