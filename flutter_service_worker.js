'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "7cc367fa596b2092d36cd09698138f35",
"version.json": "ea9dd9fbb314b5b10ead18f5d1fc8293",
"assets/assets/images/logo/icon_app.png": "8993b082f7013ec8ed570c6f9c2b6846",
"assets/assets/images/logo/logo_app.png": "21589b55a07797daf04fab0e230d91bc",
"assets/assets/images/logo/logo_app_outline.png": "015a3d8691d0e9a69337722982ac10b8",
"assets/assets/images/logo/setara_load.gif": "2113d451418662e34ceb89174923c9c9",
"assets/assets/images/e-wallet/dana_logo.jpeg": "dc4b1fd98721b8dca283668f7f585920",
"assets/assets/images/e-wallet/linkaja_logo.png": "4d80c5835551bb0e0a0cf0b0fbaa9503",
"assets/assets/images/e-wallet/ovo_logo.png": "1a62aa1c175a7bb8ce2aaeb1aef6b2c4",
"assets/assets/images/e-wallet/shopeepay_logo.png": "ce0617bd49956eb1e3065f604cdc2a59",
"assets/assets/images/e-wallet/qris_logo.png": "cd1b3535ab5c0248b0cd38f1ea11b397",
"assets/assets/images/vector/adult_image.png": "948c29ae2b04fcfcca387b5e5aa9c896",
"assets/assets/images/vector/bg_faq.png": "bd2744d88ebcbe7101d3ea50288eedcc",
"assets/assets/images/vector/bg_login.png": "8819d8d531f29ace0f6a085a385d0081",
"assets/assets/images/vector/bg_maintenance.png": "e1774d8dac28bd9ed7cf68181538a9f4",
"assets/assets/images/vector/bg_payment.gif": "bfb087f54479a965882475226daaf3ff",
"assets/assets/images/vector/closed.png": "f12359122640a0bf86162f34a0148bb4",
"assets/assets/images/vector/nft_comming_soon.gif": "e03711de5fbe62863777023a53260b79",
"assets/assets/images/vector/check_anim.gif": "2d8442209861bdd630e780fe9f07c749",
"assets/assets/images/vector/nft.png": "b390c5b0fbcb29631e8d468bbae17ce8",
"assets/assets/images/vector/no_data.png": "adc81dc476905a850be6e58b4ae1ad53",
"assets/assets/images/vector/sold_out.png": "e2c419ede3bc5dcf95b06b52db9d01d9",
"assets/assets/images/background/background_app.png": "baa3e5e8687dc087bcf2d25571690e1f",
"assets/assets/audio/event_channel.mp3": "9a2c6a602024f50f53644a106fae4632",
"assets/assets/audio/info_channel.mp3": "3cc4bba66e6b9360006fec55c6f63746",
"assets/assets/audio/transaction_channel.mp3": "f728c96a3c453aeb61bb8b4b83d16338",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c935e586e4803be1b9218357f0876b0a",
"assets/packages/flutter_phosphor_icons/fonts/Phosphor.ttf": "ae434202ddb6730654adbf02f8f3bc5d",
"assets/fonts/MaterialIcons-Regular.otf": "ae2e322c5e1c2b14ab682f7daf8aa40c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "39009d6ff5932a65cf8e5d3eab7cc344",
"assets/AssetManifest.bin": "a838b19ffc9f6c3fc8c531eaa17878cc",
"assets/FontManifest.json": "d7266237a95d15602862054c788dea8b",
"assets/NOTICES": "914ba12d0f6b1d69b18a0b2c02416650",
"favicon.png": "1f4b925a9590b9bcf103f35318f5f162",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "84ef34acca26d1a3ae71eff2559b7485",
".git/refs/remotes/origin/main": "84ef34acca26d1a3ae71eff2559b7485",
".git/refs/remotes/github/main": "bb7a0a768b79622b0b6f93e76ef27730",
".git/objects/d6/3bc94e8b30e1e1107530192de97bae3b1d0c53": "0fcaf967d338c019a0684d38125343df",
".git/objects/d6/6686c9f89ca4a55920e247df886a63ba9a5081": "a1bfdd4806eb7b51cc2695b439087cce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ed3e959a71555844b313a3e1c29535686b7eba": "632b098aeffed7c25b3e6c83ae5ce279",
".git/objects/d9/ddc213b322dc43de5314abd105e95a991cf62a": "5d7a53192982de6952a95932b473429f",
".git/objects/2f/ec84ddc10f6007f397dd7d4d46eee2a55ab0f4": "320cb800b77ddc7c1ba00d0b37cc93fd",
".git/objects/2f/8ee829e435a568a00f3f6794bc9cfb00f84e7d": "70cf80461272ec83b2730107e83125ef",
".git/objects/2f/aa7f0e4ce7d46f94a5d21c7dfd7a131282606a": "b028debc1b36bf5e17469d6ca79ad3b8",
".git/objects/25/6a582329604738985aa09a6720bb41b697ebfc": "2a0bf65fa7510b9af79f16cdaa00a32d",
".git/objects/f3/d7c5c4994df56823a04c5a4b941148795c8f3d": "9cc02dcaa97774171cbb717a4131eb8b",
".git/objects/06/4a61f54a4a590e79b537b303cdf1ef4695a715": "c811da8709c3a51d8acfb19e6b2eccb0",
".git/objects/06/0a6daeca21c6a333d473600c8d53fa50752c4a": "8b9e56be9bf2ee8ba05ba1e937863c00",
".git/objects/06/932af014bc33a53d0458b4eceeddf2e6d8e1b3": "a5b04b556de77ccec1bfe8826f5bff13",
".git/objects/06/5c3b43cf392549c37e3bb4136a7129c9875c31": "1f33e40e99b873ca57e2251b05e82dae",
".git/objects/67/cb1ce22ffc265d70b5b395962cb66b7e6ac77b": "040004dbe50f8196fb8bc99335c6a618",
".git/objects/f9/72e6dfcd7795a80839ed47669b26755e4b58e0": "e4b8871229d8c0d9fa417826589f57b2",
".git/objects/ff/332e83cd9f7b84a0d5c785054f36d076193864": "572d4e574ade9cd500bf144de23e1195",
".git/objects/ff/09d738b30ff17f332edb3e0bd481fc156d0975": "4262e1513af8daa8545c465e990f4634",
".git/objects/d3/ae4bebbd6b096400897f6482ab45d7921f7c56": "c7942bf9a76299a61712b43b2bd4bc92",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/16/dee8f85fa4e950c97e2e263330d9956eb2269f": "b9f6edca1c1d1073b1074749283fcfc3",
".git/objects/16/525ec334bc11428b87a332f13ab325218543f2": "7017985c4ca8fc7d3d5859cbfab7897c",
".git/objects/9b/13c66174c3fdcfed11aa96bf54dcdf183ee851": "b8971b7f8e2748de57fa199fac8ce20f",
".git/objects/9b/6322b8da6eb141e078848e81866ed517c5bfb4": "f5c7de04b489106249ea237c73cd3846",
".git/objects/9b/74c2e762d86e14f4104e2873c6a3944a8ad77e": "9435f9e10eb0d781ec908ebbbf3b6f99",
".git/objects/9b/4462d2a4651478dff659a2587d45bcdeff0bcd": "066128796fd42b9aa6e651ec09599c67",
".git/objects/51/501e202b7704b6c26e0a8eec01c1b6febb9b89": "b09a2e6cbb504c6cfce2ae2469ae6fbb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/faa0b4dac9ccc1db7173a2d7d5f458551e6fa5": "028574cbe6886e1e1ab0b9f899be01fa",
".git/objects/5b/f4d358b2bb34d9bd9a8a75ebf4ae82fbe3995f": "d6d1aa5444b61598263521333bf8999d",
".git/objects/5b/b2f1f7c6e60b5dea13da56cdede94bf3df5bac": "a414a15d099f8dbc17687473fad94adc",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/bb0e44b793cededa6088c410c285f4b11791bf": "38eee6cbe2aa16cd41dcf8f084a5cd79",
".git/objects/46/2c0859eb0210d9af8a0d952351eff6249de5df": "81b68e2a49b7248dc84c6b4af882a245",
".git/objects/46/6bf4cfebf55febb4a2f8fe92f56771d2067d24": "30c69344625cae3d178880fef186552e",
".git/objects/bc/f2324448ccf591fa772a09953bca11aa2ec86e": "44bf823c2c4387c7a80b9523676dcaca",
".git/objects/bc/0eface03d589cbc16f493716813c88ccc96910": "5348d795be456c0a1e057321b44c9de8",
".git/objects/a9/370de832e7f9e4c708844e2ece7edfd2ecdf75": "894f19600d25a3ee055fd88cfe27d301",
".git/objects/94/eb7a75d208322f317d0c3ce33eedf318aeb271": "850f83559d68641379bdc410fb4efb18",
".git/objects/1c/41d1bd54999c724508e479632f7539f78eaa2e": "0b626d7d42678c99663b3180d4537ed4",
".git/objects/8b/405558d78f3f7a9832006b2766c69301dc91e1": "c350fd1deae9a73902ef54cc0fe0fea4",
".git/objects/66/19a52493f901653fb40e74788afa74167f2375": "79063902e36ae2a662b3ec1127472190",
".git/objects/66/c032beac57c9cf42dad225d605ae69e90e03c3": "4be03959dda7fd42eff426cb3551832f",
".git/objects/66/1e4a81472f1d70540ff91c3163007120a59f44": "7f3f144abd233d2135d9686f28516f34",
".git/objects/32/985e364badc445bde11d5a69a14549e16810ed": "258b3155d94a3afb3445ff4d7b24f292",
".git/objects/bf/e317b19ecb128892de88a03547ec583a353f9d": "a3adf076b84315dcaf7b8a654914f79b",
".git/objects/bf/3a9418399eab103b1a41c000505e36d3d6746d": "a34ec727f4085c344d402783c2af0add",
".git/objects/a4/30a6e4cae5f7d811db22b85f5afa915b442bb7": "adf96227cdeba809725cd69d9dc81826",
".git/objects/a4/b840354aaeba474409fa536d6e50227c931335": "7f8b77c0d1e86aab481430d7ffdee803",
".git/objects/a6/f51c323629142eade9004dc6e1e6ccdc414520": "cc58b889e12c9157c86c994df2863030",
".git/objects/61/41dd3e5155ee3ba5752e07eb2b4529df74f944": "ad391a3b688559902f0ba678668d9a6d",
".git/objects/61/9d4c0c94504d85390a7341a303806dae31c228": "471c65080233841d9ef00896d576b701",
".git/objects/76/c98ce913e307c4666feff72e4ce6deeaab5923": "d8e732de2868cd4fe7f34f6f43973b4a",
".git/objects/76/577be123fb4dbaa00ee9a9882089ad61dfd1ec": "8a7f994280653b4ec67d254ad9a369db",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/fab897a41966cb2cb2aa67a01ea0485d6f9abc": "d8af0bb62e2029e2855886bd21d0da75",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/8a7e2cd9097e75876fbfa40e2fad361443dfe4": "aa7b92d12d24e96efdf98e8b40a93665",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/4bec9d984156c210cc6d4c81150b1e024019da": "e3a511e46968a8c96ebd86c93f028dfd",
".git/objects/1e/d9fd9367d8679fd0e95f006bb9d79a016a28a9": "56bfa37ec7ea4c8708ed8145e7c4247c",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/30/b1a112efec1e31c1aeb5f1bf41c2a4c6b61e5b": "210f49a76cb6d2783c4246b9e615162f",
".git/objects/a1/31836de6431609f9cabc1bf39a4e5e189abddd": "11fc599184d08459c3b1716efde607c1",
".git/objects/a1/57550d51947b373a2e2f3c3874021ff9055e50": "d7da1798fe44d271133388de4ee61af5",
".git/objects/45/e1ad1fbaa61572da53d473865ce138a05f2cea": "c9ed3bef2a70713e179fd7563fbe6ecc",
".git/objects/45/4dcb6beccc1a355d414a9e37581133333c19b8": "c8e6918849bd5de6bafba759c2b1c9d0",
".git/objects/1f/ebd9eebe2191b365f35f1a85ff598b8abe168a": "0847a54d0eb4381dad0469bcebf38e2e",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/5c/e12af44d4de2f9f60ca696e65f96022fd4df68": "cbc48ac59e5351830a229fd895a0e104",
".git/objects/88/4c85bc0ca5e90708e7f73dc7a556706498e40a": "50e89afdd0762b434ed6af978f476c93",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/14/eeda0f8a878c55e5370b81495e1f74c412456c": "e38fed6c3851c058f6f7ba424e86a4fd",
".git/objects/4a/2b29ed8f45478c60cec89276d72795681e8d5a": "5c8d24a554386fd3b3b9109414d7fecf",
".git/objects/4a/f098444d145f0eec4565b330ba45f6e7c9ed39": "1dfc02ee9e0cb9f7ef107bf2034bcabd",
".git/objects/79/04dba381de6b32da52aec5e4ead3e398a7035d": "8d56b52c666bad33ccaca4def0e5217a",
".git/objects/79/67ea9ef699263232206844205a3f1865bc217a": "14eb04dff306b0824ff822d6817abca1",
".git/objects/6b/10023b134b9ef22d92779372f9475b42670290": "2670bfc01ee8662946379adc63b67398",
".git/objects/6b/4a43cff4b025795269cd16c61f2d50bdb6dd3e": "604467d40869f5e3004be41ea161e861",
".git/objects/3b/b4aa9f9dd5275ec6519abb6bcff9def98ac682": "3077aa9e5e1726f9aa1692fb9035cf60",
".git/objects/3b/9235d2e6c3627dc909cbd6c5fb46543ac13ed5": "18fd12f70b504cf2f04763895046b07a",
".git/objects/f6/4545e8f297daa0d2c54d00cfc71590620ab1c9": "9b33d25242f44860ecec2b3dd49d7d97",
".git/objects/8f/4f92991981779451db250aae4477384f02d3d5": "6e73bc7c8b6a8cbe8adf2ecf5c1eeb45",
".git/objects/8f/6afbc5fd9d06ae8bffe7086490124aeaca8ce5": "e6dafce26b68e970b8897bf2d6931e6d",
".git/objects/8f/7586301fd149192708bb75b768c66f42b4fa56": "8247cb4c314bedab7c9da54eabf6accc",
".git/objects/8f/9fc1964de9b936eba769a5a5af7d29b7afeade": "6345b6d69dfc2239746226d89c0c75b7",
".git/objects/b9/398c2cc855146c0e51b9868f6568635d4208d7": "58266f10e17cea4edd6c4ef7d360da59",
".git/objects/c6/63a9c0cde614702b1d6aa8b8370074927fe42e": "788efcde50d3618d289e81e7e596fc6f",
".git/objects/c6/475ac3ed585eb7a0d041ac8bbed62ed9f3b6bf": "194cfb3e1aeefceff590b4ce9142a444",
".git/objects/b7/df6c1e8afa2068beac58f8f30064b22dd47374": "1a90cfac3db063a1d2a9219e449cc86b",
".git/objects/b7/d5933177166459c1a2f1b9381f634b8ad96c62": "18eb30c281fa7c1e4e99aa43daaa544b",
".git/objects/b7/598783c3bd7e064c62b0b61d203a0f075604ad": "40cebc7ea5dcd9341cebf7187082c9c8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/80/c9799723526ba0c61587b8f3cecbb6b60f432d": "03231ca7403eb744b9d5e0fd8bb3b71b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/0cc86d6bfdc5d6451780439d4935b2bc5aa2c8": "70e6c568d4c49cf67264d668675e004d",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/1bbed2cc1a5cc9a411347584a738d813094897": "093cc02dc1dba76fbc35da5924e27bea",
".git/objects/70/14bce56a17d04932e0620263a969b961b9bd81": "357be0d2ccbdcff13783558ff2f467ed",
".git/objects/fc/f338479c5f30168ed6dad2fde0e41152a8458b": "202ee81e05da6a32603ec754bfd2907c",
".git/objects/fc/c89e8529b06e5b7979b1e0a6aa777ff912641c": "b6ca5be63e9d5a7e8cb4cd3783af12c1",
".git/objects/fc/f02d9173c442d84695ad8bb80c575dcfd23dd9": "cef46d45f8a18515ca2b95141147a4f9",
".git/objects/75/2daa32bc973bbd933d90be7862ac0fbf448f8f": "476605110fdc25d707ac91bb33dfe493",
".git/objects/40/47ab80f5ab709e204454050c63998ae43236e7": "a629f97e13cbac62a64e92e0e1db99be",
".git/objects/72/9b695b28c4134c66eea2f59234ec803fb4500f": "69b40668d727ca3886bea53bfc5731b0",
".git/objects/68/9874eb4e7f5b829d51d8aa68d1a47c5242a882": "33a08c94788497865a6a09449695000c",
".git/objects/68/e5c736904b67c8f536d8ddbf98a646429bc008": "7a116d9d16b9d2d23c56cd40dbe65005",
".git/objects/68/fbd176bacaaaebe5aba2ce9bbf7e7686511db7": "465fb71e665bb0d98b9f6887358f6be1",
".git/objects/68/92bfd8eba88c769033f30a902da382388f2fb3": "6b1c5384639a058ec03d45a772f1df99",
".git/objects/d4/ae669191a2204b9bd535b749c79a8f87234525": "0fdb2393ed06b218107ff0709d1fa5d5",
".git/objects/be/a3a94c683f814bd2e638b4dd988fe69b740ddf": "1a95bec3b89cb8a2928a82e1a9e6f77c",
".git/objects/be/4057e66f7efca5cb3244dd54770f6bb876f1bf": "d764b5308334f043dfc0d323279b57b8",
".git/objects/1b/74228a08a3c0f86ca5c84a1def20bbc6dd01a3": "b3dccbe30028bc9af863af99b08947e5",
".git/objects/1b/7e4c2a65471cd3ba53d238c41becc3a5579d56": "ce1243ede38e92620909a95edb0e8029",
".git/objects/1b/539215ae3a9adc0244b5e2185b6310068e8da4": "4d8f37920d24d3e12be070f8151a60cf",
".git/objects/10/1f591eace2049defe4e2ad62a552912c0b48c8": "79611f279e2e5d708ca3b9b8d0457db8",
".git/objects/2d/535d82bb9ea699a23364a3248fceb952b929c5": "be2e03c54de0236a19f92d984b1c96c0",
".git/objects/2d/21ed7b1d3f67a0011e4cdcaf70565da8cbd7d0": "c7d5a9e8d2f15c809929ba0016db5315",
".git/objects/2d/5b38b938d3761f61985205e3b4bc491ce477f9": "d2c6c27fed3fd0f3984f883157d94c5c",
".git/objects/2d/d836e8503c9e36d510c7ac37a0dc26a3d7894d": "317ecb0499849b2782cda2f9f0199cbd",
".git/objects/26/e69a4143c4beb512ef784c1f119cf69b5a0ab1": "eb24e54b83eb055a69783607d2ef428c",
".git/objects/0a/8d66e2373f29d9a70f0b9927ceded9b3cdac02": "01a0c1e245bd07ab1f9151af831c8891",
".git/objects/0e/a5f08244526e65b7a17223493dc7022bd31f69": "6571db78add0b50c5e164b12f3936e75",
".git/objects/ea/97ff1126c9d960a7da7d94d9f0e6700913520f": "b9a7f8c304f143b5ce1c187cdbeb5a71",
".git/objects/ea/2ce81d2b32586a9510da1fd31941d45e6113a5": "1a71e320a4d69c43648f551d9f620738",
".git/objects/65/0efcb7217708ec7831b5edcd44631c87cca0e0": "00e6278172537679797b0362847aa2cf",
".git/objects/c9/c5621d7ea0e3d231b07487b61ba37c21489c61": "dd01a0693333133841635c19e46a7cfa",
".git/objects/c9/01157a818168d6407d33856a3df20201076def": "4c53490b9bfba8d4940a8e5a7bd7ca06",
".git/objects/c9/868a6050ed0fee0fe001ec7c54f1d76c97d757": "946c67504e6f90be48811f779b0c212d",
".git/objects/47/9b446c9eb9b051b686ada0aff9ff1cd524703e": "f2c41f00fb8f3b6edd8a7ec8a5b4708c",
".git/objects/47/efac27f900dc53750233badb434caccbe44a0f": "686b496d916540633d889008e341904c",
".git/objects/47/cd70a8110df02f875ef9b93d9cb00d785ae53a": "6047000948be8c980c938598effb8b7b",
".git/objects/39/387136bf13640ab310f5d6ca6e1be28e1158e1": "093262d2483b0ae88c0ee62bba012113",
".git/objects/6f/e4b2e074e3a5e11d237480998b6972fcc2f8a3": "f90ac914653bf2f04001bed19119e261",
".git/objects/28/9f0ac588f9b300f39fd77b06d56fb6c2e20057": "abd402432d675a24dafdb55ee4297753",
".git/objects/cc/0869df716f293bd4c3eca497092cb3c0cbe0ec": "e77ac347a1ebd803cd952e8e6b3b2013",
".git/objects/95/4892f846021504df0f65d852a2f2948d3504d1": "9e1857fd2cfadc5c891c09ecb78924c0",
".git/objects/95/44331179b6bc7c898dedf9d7c46ce9b80d2c83": "2fc02183054bd286ea6cf84c5d616fac",
".git/objects/3e/3d5729370b39565a982ad570196872778ad474": "6b7260911a80d9f3ae497028cdfc21fa",
".git/objects/3e/3ff04c87ff60440d6b7aa4022897b6477d7bd2": "78c5aefe81964ac6bebd768c07e6bdba",
".git/objects/22/4b7e1de37f51322107ecc6a1c5245ed322891e": "b83da5e8fea58b22671b8371741fedc4",
".git/objects/22/a2ee31f3ac9ebc8b02158218a3fe40fe537e41": "fc6222ff84abab7ab2fca33ec8f8029c",
".git/objects/7d/8e7373e1985ab866b3cdde1f9b2a64815142dd": "006965a12f2021fc0020ff1396581034",
".git/objects/c0/3c5b8dae4e786df0a3fe90e04bc601a691a73c": "b2d92b3e453a402f741036204cb8cee1",
".git/objects/c0/242b31bc41f8079174fb5dde41da04a84f5d24": "8d192b4f42b9be0c90c6e846f7db48d0",
".git/objects/1d/06810e6b82e8c519b81325e864d5de34f723b4": "3538afc6cf0d7f3ac608bfc668db7cd6",
".git/objects/17/e3fb55b188a3e6181c016ed7a47d48d554ce0e": "ea20601819abb588de630eaacd54f84b",
".git/objects/89/cdd1fdca3bbf057ccf9aa015b29570d95c70c0": "9ed8fd9e35ba6dfa0e43c66c620f9a9a",
".git/objects/83/077f62a39ac56f13b61c101a9d43cd10c11c6a": "85402063f294d6e4c66f6438f42698ca",
".git/objects/a3/e2f65cf433f9ec9d7a66dd80d96153efe17416": "25e5886b47cab8f44e094aa56ff5d795",
".git/objects/ce/57787782d45cffca6779427190b5febb88e88a": "e2d09ae4772e93f53b21a32e223d69d1",
".git/objects/b0/2973f4037fddea7b2ed23a09b5cb3f670bf545": "b261820e1d421f8b81f25999fce11307",
".git/objects/ca/8f2c4b1a7a22a1230d53f0877d0a72cf8abdc1": "f473c1517b84307f6e15e5c2980ca2b6",
".git/objects/91/9453b6b60f2304b7f1432fd0a960bb6049e167": "88a54efcf180a9232013a1b2b7c0e6b6",
".git/objects/41/18b160a8437d3552b1f006bf2661853c6406f4": "fbebcced6d2bc90763cb133b6dd29264",
".git/objects/e5/956d9c8564d9349299359a7baea8fe3d612d54": "3b7d00a167fa6a1bc99ebbc262bd90cd",
".git/objects/52/3db9debc9d8bb4936d158b4bda6ff311b5184e": "9814a78e94d7bfc2b79ce7c8c8ac3d5d",
".git/objects/e2/af2542746e9c92096b9a0b15a4bb7553ebd51a": "46a3379d8fa63d2192cf91798d0403bc",
".git/objects/d0/558f013255c0fd92532b5e8406a3afae9982cc": "660d23070acb85e6f294a8c14db3e8ca",
".git/objects/d0/1510e523b728dcc2499c2cfda8413fad88d301": "094d36e9905e313568063cad6a465152",
".git/objects/13/db8cf7041841d57fe700fef646941876d502b4": "5850afefaa30125aa6df90a7f0300804",
".git/objects/4f/6660f0dd726d2b8d8c317f6a9ce6b9323ca6e9": "07ed2426884c741199925dddf6b47a7c",
".git/objects/4f/e9f6cc4e106be799a68d541e4974200c878a84": "12a1c512b4da0c6fe1ccbbfc84dfe7d8",
".git/objects/20/53a42b60c33377211be41be30446b28278ef6c": "f91784e68ea96f9029b30f60a8ea26ab",
".git/objects/cd/181867dafe79dd9b0d393c4401ab3218a905d2": "50ced852db1a64c1a6328e1dedaa0212",
".git/objects/69/460a9240475b7cb98726f464c2695c4c0ff32b": "d8c3b7f3d8fe49a4a084ac820aa0d8b6",
".git/objects/69/9876c373aa553057008549e833f8d17252aa63": "53badd6b8ce7e4a5b1913d3d861426dc",
".git/objects/69/0d8505ff6e23c851f8d004a0b815d8a9a58195": "d431b627f9e118872936420580ba24b2",
".git/objects/e6/59a2fd4c4035e352cddc174e366db3a585df33": "cbfcfe849d16b60d9c860eec840ee717",
".git/objects/e4/8f723a4a479c39608468a7900cf7e642d2da5d": "fb399883a3dd17ffa33e63dbecbb5a06",
".git/objects/07/f660b82909c82955956a0206df5b3dabd56382": "c800c8f70f2c34a5715f66a808795d35",
".git/objects/55/dac6b4b7c06c22525bd3491f0213f27abe02e0": "50ea61a096820e9ca79eee61f81a7c4f",
".git/objects/48/6e4efd7d51c40dced75f8589a06db50b29452f": "97fcbc2879843ab3844168253e664c28",
".git/objects/48/9a01461563de1a6d253d7c5362268459987590": "fdb7fd83d13860e4d21cc66f52541adb",
".git/objects/0f/b960bb4a7e50b5095fc45104fda0c3fe61e9aa": "a267ce7c0d5ec0b233c4d0db97bd087f",
".git/objects/0f/cb384e0fdb7b8833855425eaa0973ff0c11f90": "5b24546a532d200862088ea6963b3fde",
".git/objects/63/899eb2aa7bc75f1bd1afe90ddb7fd883047ebc": "9000e32a5c33ab337e36b9ce5f3eb3fd",
".git/objects/d5/4ce5df414b4f996c102438ce9f155a19f58af7": "d0c7ce47a5d51ce4d20bb2dfbae3515f",
".git/objects/12/8988e281e78934bf3e65c5172df6f46316c1f6": "df801b515bb89a38a8135710f21abbda",
".git/objects/12/f51fc05e2fb9c6fb0699f8326bd845b7619ba2": "0987fe02232f54fdcf03f0c6af607270",
".git/objects/29/5a8e22dfb66e6d9e8e73bca6ed3982dcd80cbc": "e701f9b53ca35edc8e7cd5cb76c67979",
".git/objects/29/48f5e194a4d6d90b1e7087fde8b5cbd68873f1": "4d576974a7c55cab0b34ca04eab8e37e",
".git/objects/08/065fd77248699baf4268745b2fef2ee19b359d": "a7bfcca31cce325dea139357026b239a",
".git/objects/dc/412a28c8e9d37fe6e9ebd96736d930c0fcce55": "ccad980da28ea01ffafe9a6e45f48691",
".git/objects/3c/20aed8a970c3cd568be0fdfa1c3b2cdeb8f37d": "6b083f12b174d69bf98cfa3720ec6f7d",
".git/objects/21/31a6b301ac539d1081def6330728a656dcb5c8": "f8c1903b5b4f1ec2b3ca3b72c8801a8d",
".git/objects/21/536d52d7a9bed68a7263139d862a3f36e5b1ec": "27bb2cd28ccaf5d10b613267e1989309",
".git/objects/7a/ee10d04a262a15d2016535047a22e0db086016": "799247f30c5dec461ded47601dc14460",
".git/objects/97/ac2ae54783cd504429c3d681b9e8cb131c1a81": "9d4e205c5f1a3179c4bdfa9a432b07ed",
".git/objects/33/b8d3e54470c4b97c0b4f5409228323b5dbf1b3": "ff9603c64e33aacfcb0b8aba22679674",
".git/objects/19/068ddcef3402ff1cf33fc6dd932e8764f7e354": "fe744f0c3901b7e0d745541dbea71944",
".git/objects/e3/ab745bcfb020352609148123ace61436f755b1": "3e9435e6534313d8517b9bb13c714f1b",
".git/objects/d2/06cd1d136ab5e20338b04c6b43f3326fe69b10": "e79df0e524d40fbdad415c73b225524a",
".git/objects/f8/cfc374fc912f4af2af9ef61f2a795942bd35ed": "55531ee9d8a5df285a8892d07fe53b84",
".git/objects/42/2dc01bad88a91f56d1600be648d325af66e87b": "f4e07027e0b48d109fdfea7313dfdabf",
".git/objects/38/280d872bbc4443b05784403067f32a71afa88b": "e1b45d701b2d2b0e3314debad3c8b732",
".git/objects/38/bb1939542557898a4777c25b245df1e3e8ed3b": "243c8d0e5280f149cdd42eb81697e43c",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/24/00710e7c02fccfd89d12e5f40d92f20cbe04ff": "cf463eaa4994fb85af49683360630ce6",
".git/objects/54/e396bec2f20ae6606123f214475a4a59c5b2b3": "bc97ca94a1210027204adb669163c4c2",
".git/objects/81/4d63f0fb393e83c030fe8743fbed1cf19bcf17": "241489dabf4c00dd1257a91dec4f7ca4",
".git/objects/87/a054a2786c1d3b5c49dfbd6d2fba885917c418": "8068fd8fe36489c68f66ee8115b53008",
".git/objects/73/a6da99d866ae36d89e02e34a216329d0fc73ae": "618a34b16a218d68bb79c1c69e1a25cd",
".git/objects/bd/a3ca3d3d52927a2d3d1a4d8ba4160652b409ec": "7f592110202097a526357ba11b2f4a08",
".git/objects/8a/93ba299564d742eca3060d94fc0dc6f29adacb": "7eb28cf1da973fc9d8589ff5c83866cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/64/22acd47e09f186b862633231c1a4cfd7a264bf": "1648367dd8ff885291dcaa3d4302e3ed",
".git/objects/c7/f140e18e32ac144cabc2c7945060cb0829cf61": "bdc9d74f7c81e966cc206bc14fecde92",
".git/objects/01/ac0645f7420f635189b356aae076686228611d": "0bcf210c4876eed135c1dcca5adc507a",
".git/objects/a7/516fbcfa609d48f781fb4938bb4c0025e3c1e0": "25051cd8c6dbcd044f6c4f8fd7f3d6df",
".git/objects/74/c944f2778feb0a4153ac5764e6c1919ea91eaa": "fe0817441a6a1fc13e9aa5784862988a",
".git/objects/57/4083e606d8d0f7d3c718a0f2898c0da02da89e": "1957ab05a670c0519e3a116e932f846e",
".git/objects/fb/13717cd282f94323bd966fb6b2af66cf3bebfe": "db80c5edc8fb1205453cc2077cf3610e",
".git/objects/cf/b94fbc6184b14468f44d9756915a3ab64e6878": "8d03d09ad205330afd54f8b71f6bf9d2",
".git/objects/b1/8a8a22fe0b78ced3525926642b21a3e138db73": "a52462e463153fc83382f2bc7a14d54b",
".git/objects/f2/540ca7d1c3e98c92400c6e79951c81e563b7e3": "c778086decdb048b9044d99540536f69",
".git/COMMIT_EDITMSG": "26cf8c1d202f3488a1113d283bc3e5a4",
".git/FETCH_HEAD": "ef18208d520e5647a6ba1a06a12df69a",
".git/REBASE_HEAD": "6f3684061ed2dbd764181d7cc3bec500",
".git/ORIG_HEAD": "84ef34acca26d1a3ae71eff2559b7485",
".git/logs/HEAD": "e4111b297d58026e9368a21ee2636d4d",
".git/logs/refs/heads/main": "e7c9789453b13582f951459d76245f01",
".git/logs/refs/remotes/origin/main": "8fb3727302e4db5398e6d0c5fcc5b732",
".git/logs/refs/remotes/github/main": "1f832b63c1a5a33eb08b02d9ce1b11c9",
".git/config": "21ed84d29c5f67a81c9ba43cb97aadd2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "bd65587fdfce1fc040d2c15517cb766b",
"index.html": "43893d44ff623216741da1715d08238b",
"/": "43893d44ff623216741da1715d08238b",
"manifest.json": "486f73c5e3d4ab339794ea558a873733",
"icons/Icon-maskable-512.png": "792cde1ec230710cbdc22d66ed31f334",
"icons/Icon-192.png": "ca8541707576ca3f138d6af266868b5d",
"icons/Icon-maskable-192.png": "ca8541707576ca3f138d6af266868b5d",
"icons/Icon-512.png": "792cde1ec230710cbdc22d66ed31f334"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
