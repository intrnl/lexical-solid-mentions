export interface SuggestedMentionsData {
	did: string;
	handle: string;
	displayName?: string;
	avatar?: string;
}

const dummyMentionsData: SuggestedMentionsData[] = [
	{
		did: 'did:plc:z72i7hdynmk6r22z27h6tvur',
		handle: 'bsky.app',
		displayName: 'Bluesky',
		avatar:
			'https://cdn.bsky.social/imgproxy/LQdoaVquF7hEwCIJ1FW_AL52O95YYgoNyKzr9C-ibik/rs:fill:1000:1000:1:0/plain/bafkreic5kmqlhrhbfnh2bx6fsetvkra4noqja5ngsnnadrvubd6jcoc3ae@jpeg',
	},
	{
		did: 'did:plc:oky5czdrnfjpqslsw2a5iclo',
		handle: 'jay.bsky.team',
		displayName: 'Jay 🦋',
		avatar:
			'https://cdn.bsky.social/imgproxy/ogSgUNedsoOiSf3Tu_rixfF3Ku4lJPeBJV_oam5TKqU/rs:fill:1000:1000:1:0/plain/bafkreihquydaf5xer53afkmdefp2hpwbtqcgurxo2hsdkrpwpvm6uhkyg4@jpeg',
	},
	{
		did: 'did:plc:vjug55kidv6sye7ykr5faxxn',
		handle: 'emily.bsky.team',
		displayName: 'Emily',
		avatar:
			'https://cdn.bsky.social/imgproxy/flDB7MnOjdKyXYdRW05EMzkDHbgC4MSKI12ajNuw4Wo/rs:fill:1000:1000:1:0/plain/bafkreie3rpi6lt6yfqu7c4i66z4sti4aqoy34bmr3f7nvo4a3f2m5hwkba@jpeg',
	},
	{
		did: 'did:plc:qjeavhlw222ppsre4rscd3n2',
		handle: 'rose.bsky.team',
		displayName: 'Rose 🌹',
		avatar:
			'https://cdn.bsky.social/imgproxy/lAOvAwD_ZY52fCCL8h4iYTNZ51YXnT2CWvGj_Si83EA/rs:fill:1000:1000:1:0/plain/bafkreiduo7ejnqeewxgc7qgddxmqfky3fduxi2p42dtfl44khh4cc3mcj4@jpeg',
	},
	{
		did: 'did:plc:ewvi7nxzyoun6zhxrhs64oiz',
		handle: 'atproto.com',
		displayName: 'AT Protocol',
		avatar:
			'https://cdn.bsky.social/imgproxy/EoCjH1lIwK1YNFuG_xYYK76vuHhEAQKWAkzlz8BSO_Q/rs:fill:1000:1000:1:0/plain/bafkreibjfgx2gprinfvicegelk5kosd6y2frmqpqzwqkg7usac74l3t2v4@jpeg',
	},
	{
		did: 'did:plc:o7cjkbvotxydby7uvvx32hkm',
		handle: 'weirdmedieval.bsky.social',
		displayName: 'weird medieval guys ',
		avatar:
			'https://cdn.bsky.social/imgproxy/RRTmMJDj2S339zbs7bqaNckUao-7ZkT2L-1tmD02Pu0/rs:fill:1000:1000:1:0/plain/bafkreics7lnlr6hddzzb5lyz3miyopav3y5bxuf6epbviacqbm5s2qq4vy@jpeg',
	},
	{
		did: 'did:plc:73dpznbu4wqwtcyurwbiulov',
		handle: 'archive.org',
		displayName: 'Internet Archive',
		avatar:
			'https://cdn.bsky.social/imgproxy/9uEZZw_qG6u1X3yZiS6SysnZEJp1O0FLifnzU36r5Lw/rs:fill:1000:1000:1:0/plain/bafkreiemdvhpo5rnsxktik5dkvmmc6horutcnlyoxwwrhsuaojz6qbzdyy@jpeg',
	},
	{
		did: 'did:plc:jmte4w4x7ukciit6lci6ziau',
		handle: 'phillewis.bsky.social',
		displayName: 'Phil Lewis',
		avatar:
			'https://cdn.bsky.social/imgproxy/7-d0vNg0szkRrExuN2cZ9mTa6dSne84nua9I-CjNiB4/rs:fill:1000:1000:1:0/plain/bafkreif5xhqmtujhof4uey7cczispl54swmm6tfw5ouvurkppjgnkj2nbq@jpeg',
	},
	{
		did: 'did:plc:2zp4ys4ruuuahm5k7xpa4sug',
		handle: 'craignewmark.bsky.social',
		displayName: 'Craig Newmark ',
		avatar:
			'https://cdn.bsky.social/imgproxy/2BAFBsDdjyP8LH7Su5k5MWseSSGfAdyrxijWpT9W_eY/rs:fill:1000:1000:1:0/plain/bafkreigf7pys5ukwihyvyszxwauabpldkxemzlw45okyw7qbez4uhjqemu@jpeg',
	},
	{
		did: 'did:plc:zgzd562ohk7phvh4ewzbddcu',
		handle: 'jramseyi.bsky.social',
		displayName: 'John Ramsey',
		avatar:
			'https://cdn.bsky.social/imgproxy/L1P13GWshvRU6GFDLIdi9cpbzCT6fFl-vgpL7xgO0Fg/rs:fill:1000:1000:1:0/plain/bafkreigadf3zhp3k6d42gnxstmreeqxju5yzexo3rwvgqpy5ze46fkvegy@jpeg',
	},
	{
		did: 'did:plc:mlq4aycufcuolr7ax6sezpc4',
		handle: 'friel.bsky.social',
		displayName: 'John P. Friel, Ph.D.',
		avatar:
			'https://cdn.bsky.social/imgproxy/LeUT41ZzA_UMGphVs4PH1rkQHOFwJuuZPOsNBX-PITA/rs:fill:1000:1000:1:0/plain/bafkreicnbuxiiqyn24subhjxekq3yhttsg4hdqgar3dnlogidk6dlys3x4@jpeg',
	},
	{
		did: 'did:plc:xrr5j2okn7ew2zvcwsxus3gb',
		handle: 'catsofyore.bsky.social',
		displayName: 'Cats of Yore',
		avatar:
			'https://cdn.bsky.social/imgproxy/zegvh0O4WIKR7Kx1vrl7dYKJRUnRB9YNOmY4N4Lfd60/rs:fill:1000:1000:1:0/plain/bafkreig6pljjdx7aekpetnwdxmjzhcbiwsoph72wjhjzjqsey2bzrj4pz4@jpeg',
	},
	{
		did: 'did:plc:lotavzt36yanhfy3j3gpysyj',
		handle: 'jamesgunn.bsky.social',
		displayName: 'James Gunn',
		avatar:
			'https://cdn.bsky.social/imgproxy/-uakGe34UgqWgkmsX1URB68go_7ZN1AFPtZptcHK-hA/rs:fill:1000:1000:1:0/plain/bafkreifzgabi6bdxvibkqletvq6zxwph4jdhlrbjx2e2nsqmaldschgsii@jpeg',
	},
	{
		did: 'did:plc:j5wdt346dbekcpjszpu4tvth',
		handle: 'ericajoy.astrel.la',
		displayName: 'Erica Joy Astrella',
		avatar:
			'https://cdn.bsky.social/imgproxy/Zh6U9-gTSCKczkyaicITlYbl2vQFPqoc2wY6Jw26Ddc/rs:fill:1000:1000:1:0/plain/bafkreidt6glold5qcbnpvexonx6hxayw4cg66rmketax3lj4tmz6n7zunu@jpeg',
	},
	{
		did: 'did:plc:nvfposmpmhegtyvhbs75s3pw',
		handle: 'jbouie.bsky.social',
		displayName: 'b-boy bouiebaisse',
		avatar:
			'https://cdn.bsky.social/imgproxy/sBajC9o8JjTStk3nj1OBLc_U0EM3nLYIa5BjJRLO3dk/rs:fill:1000:1000:1:0/plain/bafkreifxotq4scn37nltgrrnvhilwkh4syrrxkaa4ff5sfabxf45k5c3be@jpeg',
	},
	{
		did: 'did:plc:b5ly66nko7iijwy2lktt3ctq',
		handle: 'whysharksmatter.bsky.social',
		displayName: 'David Shiffman, Ph.D. 🦈',
		avatar:
			'https://cdn.bsky.social/imgproxy/6spIGm2I81o5WSYPmdfRmP4Ff2G7oWYbT8P_sNRYXBA/rs:fill:1000:1000:1:0/plain/bafkreiakpc6hz2kumdjx5imgvevqsquajjfkxicnmasgef6ky52djzgawm@jpeg',
	},
	{
		did: 'did:plc:k5nskatzhyxersjilvtnz4lh',
		handle: 'washingtonpost.com',
		displayName: 'The Washington Post',
		avatar:
			'https://cdn.bsky.social/imgproxy/_RHgzQKNhcN-HLuiGwI3UESQVeumPwI8oAwFNp95rFM/rs:fill:1000:1000:1:0/plain/bafkreicx5ybi5wukvetsv3m74z3nmvbvrdhgms6sr4nlilrktv5u2lmsay@jpeg',
	},
	{
		did: 'did:plc:ixbx65nykgfendlbklegjxnj',
		handle: 'sabs.bsky.social',
		displayName: 'Sabrina Imbler',
		avatar:
			'https://cdn.bsky.social/imgproxy/hNJBn_CZbvZiNtF6B9bXhvSDbm_h-DTCjypXjyRpKgw/rs:fill:1000:1000:1:0/plain/bafkreicxm3nhmzbk22onmo4vbhrp3w7bexfr3ezgw5okh6lfhmunb7sxiu@jpeg',
	},
	{
		did: 'did:plc:hu2obebw3nhfj667522dahfg',
		handle: 'danirabaiotti.bsky.social',
		displayName: '‏🦀 and handed you a crab  ‏‏Dani Rabaiotti',
		avatar:
			'https://cdn.bsky.social/imgproxy/a_Ar38LVvS8mOFcIwDKHESN-VpjiPJKJUiycyD3EPlg/rs:fill:1000:1000:1:0/plain/bafkreiexgwf6xmrlgjzzcylk2hzb36qvnkrk3lqi6vrharu5shpsybcwke@jpeg',
	},
	{
		did: 'did:plc:a6fhqk5aa37akkllmaldpmop',
		handle: 'fungirl.bsky.social',
		displayName: 'Fun Girl 🍄 ',
		avatar:
			'https://cdn.bsky.social/imgproxy/4jkQL1JqeULUuhE5twKzS5rJbF2-lGCP4eDvVbVh77o/rs:fill:1000:1000:1:0/plain/bafkreid3e4qtrnoyatalduldmvhdhps5qpefxed65xuaazlyr4rmvqjj3m@jpeg',
	},
	{
		did: 'did:plc:gocmmddhwq22kyammex4ixfm',
		handle: 'kumail.bsky.social',
		displayName: 'Kumail Nanjiani',
		avatar:
			'https://cdn.bsky.social/imgproxy/nYS1hwB_qmhQTi0-oU-dpD0YiMvRtn3ur1PEUEXBYFU/rs:fill:1000:1000:1:0/plain/bafkreihvqslut7qzrpzunkw37vp3thhmdygw5qqjbj6m3elc37cyc75idm@jpeg',
	},
	{
		did: 'did:plc:2jspkem5l66pgvdhkcibmh3d',
		handle: 'oregonzoo.bsky.social',
		displayName: 'Oregon Zoo',
		avatar:
			'https://cdn.bsky.social/imgproxy/v6Crd81xjBwh0fBSUNxarEhAXZ47Ll39bqnHyqSlfXM/rs:fill:1000:1000:1:0/plain/bafkreibtnn7stpsk7vwcr2y5eozfb2ev6cmdwaty7tuxxehyvw42t6jfbu@jpeg',
	},
	{
		did: 'did:plc:62gdkmpwa7xme36getyqnem3',
		handle: 'astrokatie.com',
		displayName: 'Katie Mack',
		avatar:
			'https://cdn.bsky.social/imgproxy/RM8sE46Rj1MpcMIHoOWHBs3Ne56KI5lyabjkS4a2gls/rs:fill:1000:1000:1:0/plain/bafkreia7wdfi6wwp5dfe3tn2urjnkkujdds6x2bjebf2bbjnxx2h36cnnu@jpeg',
	},
	{
		did: 'did:plc:2gx2noukxzwmj6dkxbmh3qt5',
		handle: 'davis.social',
		displayName: 'Davis',
		avatar:
			'https://cdn.bsky.social/imgproxy/df_hu6wJ747f27J4ppT9MSJCZEU2BMOv65oWWQkcWqU/rs:fill:1000:1000:1:0/plain/bafkreihvf5ycpolys4zmxeh274mn7zicxu4wxm3echza6uuuki3gxxezv4@jpeg',
	},
	{
		did: 'did:plc:y7crv2yh74s7qhmtx3mvbgv5',
		handle: 'bsky.art',
		displayName: '@bsky.art - Art (on Bluesky)',
		avatar:
			'https://cdn.bsky.social/imgproxy/cOCVXpyQf4LAA21d6rfz3hqor8QAbANeneNkRUrtjfQ/rs:fill:1000:1000:1:0/plain/bafkreiah2jqtaoe4aeev4l2becc2ohxxyh7q6hddftnqvzqg22ulgv4s7e@jpeg',
	},
];

export const dummyLookupService = {
	search(string: string, max = 10): Promise<SuggestedMentionsData[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				const results = dummyMentionsData.filter((mention) => {
					return mention.handle.includes(string);
				});

				resolve(results.length > max ? results.slice(0, max) : results);
			}, Math.random() * 1000);
		});
	},
};
