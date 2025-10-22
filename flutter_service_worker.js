'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "471ceba321fd48393ac1a5e0092c5a04",
".git/config": "2b17d95bd1693c3af1d00a875a863db5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b3c428dcd062360636acff0e0d0aeaf6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f427232865b3d48797ea1eb8986e200",
".git/logs/refs/heads/main": "027d3d9958155f460074011d69fc4456",
".git/logs/refs/remotes/origin/main": "e78b9018280dd05efdac3f988463b9a5",
".git/objects/01/701a435b39fe0c5229dc0d568f1245fcc75108": "7f1182f319526316c4f476d4f1f050d7",
".git/objects/01/badee38180b331ae6f8e803bf8e41c9bfbf572": "eaf80fcbe681ada88c46d6bcc56aa758",
".git/objects/01/fe81558883f690e300d8c98aaf11737ff763c1": "be4f40b503d044dd1229a2debfb05c7f",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/a408b2d2a66ff988d282053138ab3487e5dab9": "879448252db45ea30af3a9e94597d90b",
".git/objects/03/e660d99783797664121857ea65ad14e434fdac": "2bf1d0cf3871327bae9d3066424bb9ec",
".git/objects/0c/1bc4a9b8182d86599cd83447109c37ef44bd64": "41ff6be2c6850d81029e9440928ce910",
".git/objects/0e/7481f3c4c874c44bcd63ab13e508ee45f38de9": "016c1f670c7a4dbee0c77d99b111eeac",
".git/objects/12/39d5f4502afd5455648d6723a777f2b49b4613": "9e464d6b1b229c37e0e60d12baa392dc",
".git/objects/14/1454116b2515c5de3b436af843d6d04a71ad7e": "30cf0f1b356341fcfa878abe46e5e9d2",
".git/objects/14/ee7f53efa4108cfb420df5e90e1fedff4064e2": "4004799170dcea5d80ebc0a008f62e1d",
".git/objects/17/d94c60fc7e43e702acb1b8dcd119e8bd93c1bc": "7f292c1fc6a34c745a8c437d5df5fc92",
".git/objects/19/b8027277c24d27cdf5443ded8f148a2855b819": "d00e15bb8ef3e560ba18cc1d5d8514b8",
".git/objects/1c/7887f7577ea4aad445db2164316508e6a7a39b": "2ce43d9f565a32b13b538fcbb6d8416e",
".git/objects/1d/4f8c7acd39ffd24a44e7398b58ba6881a4b3fb": "7105fab5fa15bdb53f02d75892e52894",
".git/objects/1f/57e6a9146cb8fa1512445e247a83222fa6fe96": "1835a6afff61693d338486aaf5eb5edd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/27af0ccdb1f8b7a97dea45716a9c874a4e5f8e": "287580ea3ae6c5ce6025744a741674c0",
".git/objects/22/a99f347f26e7e12648ba6f7fb80adff38fa34b": "2a85e43b7ff71871a4fc31cfbb2bd488",
".git/objects/25/78525c855443538e5c01d543acdfe00346a409": "07c6a93f917491a5e969d1b97950a3d6",
".git/objects/29/ef5e1eb3e8894d1e96c6300acb9b0617ea00cc": "c41d2a0e87498a49fbfa04e8b78000a7",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2d/d1324ef513944b45fb0d7aa5c6baf50d7222ac": "81d7cd3ccfe97922235e1b17733476a5",
".git/objects/30/8df46bab28feb67059df40c3296c1b56954480": "92f8e6d577ce2a1f00a30f547069bf90",
".git/objects/32/5beed094945303b5590a2f0bf01df06283b4a0": "8473ce0042363882c91ac118a2166243",
".git/objects/34/05ac259a3286a602793fe8c66ceb7e98afad47": "fa5b94495c1cae26737f130fde80edcd",
".git/objects/34/5f468eea09565f1fce9eef4767387837ef15b7": "48be6932d93e1cfe38866d90df2e32f6",
".git/objects/3a/1c1c18499297897ac0a2e258bdd01476557a98": "2b714af447040d538bdb822675735a9a",
".git/objects/3a/f490ce095fdb8d42cd95a02ed3203a7a92d89d": "6024c5a1ce6a322c939ff917c940fc1d",
".git/objects/3b/ce4612e1cfcc2bda0cabb101d461c06a801c1c": "5213b051645124d1b7675d76d1c0d207",
".git/objects/3f/2050f580ecb9e14e932dbc28e456c6ef0ba4d8": "8d043e835c4c67079b7547f8061de523",
".git/objects/40/6642af12e4420201d67784e016c9cbe9b5351f": "02e92fae7cfc916c012900df7e6320c0",
".git/objects/42/de0eef87feddabf74f843b3603c53cedddb03d": "1d89d9adb106a1d6e54b44b815a09ad2",
".git/objects/43/6ab6e86d58465711b16304f19fc953f80ea964": "7b3193bb94358182c27d5afcc9c585e7",
".git/objects/44/8b04733b2647076b9cf308b00bb4ad67a76a78": "87b4fba8fafe49c1e84a79e7d9abc235",
".git/objects/45/d3ef8df9e158f6e3b31be409fb8415999a497d": "3c5ec42c33afec84da6e36a419543dce",
".git/objects/46/b38f302b141612af281c9abb3b6b39afc52f60": "72ee8bc7eac3e7d4b19fa047377773b9",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/91c79bb7eda5fba5b4d652c9a5851bd5d9ba1a": "f72bd817557e373248baf92bb5504e41",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/c0cdf0350b15873994e4343cfcdb5ff728b196": "f22cb31a4618f2c2a912b0539411e783",
".git/objects/4f/dc079c4638784a5d47e517592b22cbe71330b4": "a03bde77f4e43b0d2984e13fd79efa84",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/34486089b427010c550062d45c77a46ada7eb0": "bbf2dfb0acae5a8cb52fd3e2670f245c",
".git/objects/54/19a4e0a0a41333b1403649342ce56c10b472d1": "502a3cd956e235868bbc8d00e7c317b5",
".git/objects/54/39b9d7d6dee545e4f9e729251a376d6ec92eda": "e1195fd61188b1f1dc08c7aeea2e6eb9",
".git/objects/55/66ebe8e4c0a8cc052db4126c4650427707f99e": "1cf06455da2030bc7b14b3435aecc41c",
".git/objects/57/3e3e5be5b5fce7607f393a54fd1ab85f361ace": "ab76fc43b6955523897c4d072d1f2fb0",
".git/objects/59/3707f011676c16f84826b508fab7c1080f9e12": "08c77acbec291ad902f5540ba75dc12b",
".git/objects/5f/942336437ba397d41ee6ac1d22ae1eaf2c83d2": "bd37f1fbf8383b1545a87502556b5632",
".git/objects/62/b646887643570ac45fc0318de71c8c0d1fe009": "4c9e4158fec5777d19238d8f83a5f0a8",
".git/objects/66/efbf90787a0f38c6e072567f8403bef6aa9818": "5f917cf70853d783a2dc8326541a557e",
".git/objects/69/ac217cc585dcc1b65f5b87a4e81af45695e84e": "9abe75046a936e0336fb8293625886ad",
".git/objects/6a/962c1281f75c61b6e7daf5145ac9354e473eaf": "2005351db6396d36faa729623cc3aad6",
".git/objects/6e/7584afd16a57668b0b6f1d826700d343c55076": "0ec77ec0ca35e7d2b122089eb98c6226",
".git/objects/72/e1b0c2ef68005757b9ecdaa46e7442c14b923f": "943e600a616e5f10c5b8f1df5a349529",
".git/objects/72/ee62cd4b6ab81d4bea85e2bdbdfe0552210ac7": "215dabcde11005d304df4d342b499211",
".git/objects/77/e48a962a48f7f8f9548718c04c643f1d000d8e": "3efc6abca8dcc91620939df555d19878",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/b1df67a67ca50180fc7c11de0d94ea40c9a45a": "66ac96b5042d72c7d672e4a0772b4007",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/82/cb61a37ec8d673c7befe220b964d034457ec77": "2ed1ffc382a860d29a5efaa8c4a7bf41",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a9367fc255751c2acbae7e6ecbab7382ed6841": "8ad198f0c07b3ff7735a866a040f3399",
".git/objects/8f/e5176f2f42556d53088d9aacc66810562d41c5": "c436559442168e9a4d0e1b5d3df42745",
".git/objects/92/916003a6f101d9b7f6941388a9d8ddc8099003": "28c1e169cfa7982857230c844d34abe1",
".git/objects/93/65a711e0c69aafe6cc363f2f32edcdcc631d85": "eeba96bc1fb562d265a310e705939936",
".git/objects/94/eb1418a6dbd8ee8930dd1e7394edeeebf53937": "6578abf68ccaab0d39f55d9f0020bec6",
".git/objects/95/204d36f9faf5e41bbe2272defa3e148e75162f": "ecbb430b73ef459d7e66aa8bea42186e",
".git/objects/96/0944884c7a377f82439ed156c3b10a71506cee": "60c5b544e3a9661fb1fd392ecc028254",
".git/objects/96/96fc83668462190e57aeaffb3558881b7978cb": "8620f4ee9604fbb022a5c8449f509f19",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/db8b65a7ff2d95d02dd08ccf6d06149feeb78d": "3ee1843dd99cd4814906d5b800a1a403",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/9be23597ce29a2df5788a0ec89c2e1a3a9382c": "7a23e430505727cf3c7e59947a6ff0dc",
".git/objects/9d/0e8eca799051244c6e9e815053eac04ec84a9d": "83bd63eea2130537174b3ca0cebb644f",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/9160e59aed766a5c4e5485ce0aec3fe289eac0": "3c590653d748a695507aeabdcd306eb5",
".git/objects/9e/c68fe38dc5401fcb68755e33357046e9b3eb4b": "edf0fda4b681ac197f6f67caa031c748",
".git/objects/9f/00b1ce56466fb3e864cd916433b868a34d2d69": "0874df6d9b8efe84a6f57973a684819a",
".git/objects/a3/6807b0a11a153829a18c2a9c02a65df1a2f4e8": "1b2dd93ba31fff1ca43afe3ab95047d9",
".git/objects/a8/024649114a9c01baac3c2ffcc34f04842b2b3a": "5fc2eb9b441ef1a3d40c5ec76f8786f0",
".git/objects/a9/ba2dbec212d1c8cdc1865ac4885eeacc38d24f": "bb1757bd646e2d5cb0b9100be458943f",
".git/objects/a9/e02b4d833752ad47926e3a47449a4ced13b535": "df0a6df9d43f83deb79faaaf5e99cf7e",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/bfdaa95f0fcced3b050a4066579f1292a78a71": "ab01f394ec1c2145197c2374fa01e875",
".git/objects/ae/18f9c5644b0931819a382211911869d37bd149": "1d87362523c154b469f848d0d1d6a1de",
".git/objects/b0/8242468bf047d9a0dce2d1b5a1630497792049": "d3c0f6d794c7787323e3b9860ca0859d",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f9eb5b845488b2d694e03bc7301a81dc452966": "f912664f2b1c47d3910e86c9ee8cc467",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/c3/15c6966db3ed42025948efac273828e7ea652b": "c92bbf6a02baa4f5d15bcab4b9ec3fa3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/fd0e2bc65f8e83b1f3ee94f777b1d5f1527f10": "447074c56e6ca2209dcc3b6510ef6f5b",
".git/objects/c7/5acd8d8fed4a6ef6061cf7ab22f0c3939b6859": "bb3c2c5c60345c8f574398f311c8a0bc",
".git/objects/c8/77817edc1ec0399bea31d814909a4f8ee4c035": "8ea5e098ad532faa46c768211dedd687",
".git/objects/ca/1ddadc214091439edc299469d5e5eb37e55135": "9a06f0af78dac9466f7e867a553f6c48",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/37d1035a756f8b999f03ff8eb3812c7db79e19": "50f8f03d53fc8dadb8d75a74da32e325",
".git/objects/cf/0f941ba2ee799ecd6457d29f79f66a48556c57": "f4804468cf135a0bd796726d4149ba61",
".git/objects/d2/5a0565c919a225edc6573921c0ae86f13273e4": "766cc2e4b0eb9173d8cc3da1d388cd82",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/e2/a22948db173e178e3fe08fe2c5c716d39b5515": "a7e8f2ddcfe49a01661dd478cfc6675d",
".git/objects/e3/85e2fe5e264f81c8494acc740bbdc04ead2981": "2b0392b21fa5142bb105e82362966dc8",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/325749be610f8d96acbc2788c7d43f7d34210b": "3e1be25668bf767cb80e59acded84379",
".git/objects/ea/ba0c5e088000b49012647832aaabe5da3afba3": "ad22838b8bc6a7175af573d164ec20be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5489f3d16501d3f81819800f4411bc8d3df3e2": "86e26b18dc9b23a9078e758bee4dcf9f",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/cebc0559c8387d2a257ce57e5d17642274a8ab": "889b0890bd09ddd1d25fef211e67e906",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f1/8da38936da307c499ab184b710ff4070f36265": "9f91509b67527cec264785f571064049",
".git/objects/f1/dd95e8dbc6b4cabe462fae69dba87d0935342a": "d834f318d9b60f9f03c920dd7120b4f8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/08df3f3d51c27746e5e6b2ac1061fdae822052": "a342bd91311f31deabad9a4ce11a36ef",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/f77ccbe207df19fd0c371c9b5aefba186d1579": "2222437c6e5b8e1599ad3c3784ae0982",
".git/refs/heads/main": "011f6fb7e1952abdc7dd95b5fa9c8c35",
".git/refs/remotes/origin/main": "011f6fb7e1952abdc7dd95b5fa9c8c35",
"assets/AssetManifest.bin": "3db227c80c906dad4aae9c7acedef23d",
"assets/AssetManifest.bin.json": "205cdee46fb0bb0bfe735acac9e06825",
"assets/AssetManifest.json": "165efaec1700323411e31ca4d6ac56fd",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/MA_Logo.png": "b48851d7fb1a98e928ae1cd47a4a944d",
"assets/assets/images/profile.png": "6dc2795b061ea5b87ed40aea1369e5ef",
"assets/assets/screenshots/ala_elsarea/1.png": "6d94727afc410abd1bf836c4df314fc1",
"assets/assets/screenshots/ala_elsarea/2.png": "246072c256aa51a418e80cf5e71820e7",
"assets/assets/screenshots/ala_elsarea/3.png": "1ff7c310bd71da2f267c21f992ad604b",
"assets/assets/screenshots/ala_elsarea/4.png": "606c3463f62dfa3dac7561df9477ea2f",
"assets/assets/screenshots/ala_elsarea/6.png": "92101e7c815a7387b14faffaf085966a",
"assets/assets/screenshots/ala_elsarea/A11.png": "7fd23066c97621934fc9f95331911b2e",
"assets/assets/screenshots/ala_elsarea/A12.png": "37270de2e595f46f159f1c838d82e97f",
"assets/assets/screenshots/ala_elsarea/A13.png": "1ff7c310bd71da2f267c21f992ad604b",
"assets/assets/screenshots/ala_elsarea/A14.png": "606c3463f62dfa3dac7561df9477ea2f",
"assets/assets/screenshots/ala_elsarea/accountEdit.png": "740f8a2cdc7125359af7b61b3b6752e3",
"assets/assets/screenshots/ala_elsarea/logo.png": "de94f3f5753d623d8dbdfd21fba3b98a",
"assets/assets/screenshots/ala_elsarea/selectAccount.png": "db06a69b025f2c044ffb06be69ba7677",
"assets/assets/screenshots/desktop_teacher_helper/1.png": "2bc3ba813f45fb0a8c6618227d521088",
"assets/assets/screenshots/desktop_teacher_helper/2.png": "f9c8248e45c4d505d5b7d1eca8f0e243",
"assets/assets/screenshots/desktop_teacher_helper/3.png": "b80e322a02c79d02c58065b161d7149d",
"assets/assets/screenshots/desktop_teacher_helper/4.png": "58b55e7b9d169922360adcf5a6bea3e8",
"assets/assets/screenshots/desktop_teacher_helper/5.png": "92bea278decb7bac29ff89f704c5da45",
"assets/assets/screenshots/desktop_teacher_helper/6.png": "266b7056eacc88b4949202289ab07eda",
"assets/assets/screenshots/desktop_teacher_helper/7.png": "6ce53670377c09456891c07da6d7b6de",
"assets/assets/screenshots/desktop_teacher_helper/8.png": "bdfad2293a8bbb533a009446a3647dbc",
"assets/assets/screenshots/desktop_teacher_helper/9.png": "de207229fd88d6ef8fad581d69898677",
"assets/assets/screenshots/desktop_teacher_helper/attendance_logo.png": "055e29f705318e860ee5ed4c3b72f62e",
"assets/assets/screenshots/favorite_places/add_place.png": "0fd5da01798c34f60034a97f10d8df0c",
"assets/assets/screenshots/favorite_places/add_place_filled.png": "882e3e8e1eb027e16b01debf71c26995",
"assets/assets/screenshots/favorite_places/empty_state.png": "d0e8b54bfd6fa9d67cdeab432cd5af29",
"assets/assets/screenshots/favorite_places/image_picker.png": "df6b877bf2b3f11450f0c0c057722a19",
"assets/assets/screenshots/favorite_places/location_picker.png": "983f5dfbd2208c41ad52ecc5445b69c0",
"assets/assets/screenshots/favorite_places/logo.png": "b3ac02863ddaf9472a3d15ff8f317ad2",
"assets/assets/screenshots/favorite_places/places_list.png": "b32e94eb5db384111b7956ca73a41c04",
"assets/assets/screenshots/favorite_places/place_detail.png": "1ba2334dd24cf3de4cdaded634be99f9",
"assets/assets/screenshots/favorite_places/Screenshot_1759601520.png": "b0f049980228b0f9b124593de79cc620",
"assets/assets/screenshots/flutter_expense_tracker/1.png": "f84c7ddf1a0bd65f61595388ded137c7",
"assets/assets/screenshots/flutter_expense_tracker/2.png": "fa8b6da88a7c47a7adf5cca7a3f63ae4",
"assets/assets/screenshots/flutter_expense_tracker/3.png": "ef951fb4791337325e2f2afb7bf57c55",
"assets/assets/screenshots/flutter_expense_tracker/4.png": "77f51bddf9d8c755cbd73d9782e29e25",
"assets/assets/screenshots/flutter_expense_tracker/5.png": "039f0782b3f0b0282b333ca24a6c5f8c",
"assets/assets/screenshots/flutter_expense_tracker/6.png": "dae6574ddc91714dfe1d542c8ff8c158",
"assets/assets/screenshots/flutter_expense_tracker/7.png": "3cf686cea3df1c9075e40a9a9e64cbcd",
"assets/assets/screenshots/flutter_expense_tracker/logo.png": "3e576d35fbafefad00886221e2e43d39",
"assets/assets/screenshots/islamex/1.png": "0b86d0f59b75c4440f8adfa71963236e",
"assets/assets/screenshots/islamex/10.png": "05b7fa320d1e11919ea497dc0f8b9892",
"assets/assets/screenshots/islamex/11.png": "b992d6aa2e47da5f69435745e978e633",
"assets/assets/screenshots/islamex/12.png": "dea0c2824ce8fba4925ab3501522cc2a",
"assets/assets/screenshots/islamex/13.png": "d75041f8e3c8e844f774ccb8c200d121",
"assets/assets/screenshots/islamex/2.png": "3d0bceed94882e65f08e7b827ae651df",
"assets/assets/screenshots/islamex/3.png": "66b44317f30056f9b0cb16a61dbd0879",
"assets/assets/screenshots/islamex/4.png": "a80085643ac7f181efc2f0b356ac1a50",
"assets/assets/screenshots/islamex/5.png": "0d7d5eb9ace5517f80cc485978b03ee6",
"assets/assets/screenshots/islamex/6.png": "d596489decde95591d8503f3dbde484b",
"assets/assets/screenshots/islamex/7.png": "f7a0c600fce9e38d63cc974ec0ed93eb",
"assets/assets/screenshots/islamex/8.png": "e88ec2a8143ec8250800f5328582c66d",
"assets/assets/screenshots/islamex/9.png": "e0bf9f987425a88b5e4a56bc80a90f8b",
"assets/assets/screenshots/islamex/Logo.png": "3466a94af1709c6b9b1d03fae792e67c",
"assets/FontManifest.json": "1a5cd219969f67a595124c1bbb0bd5f6",
"assets/fonts/MaterialIcons-Regular.otf": "0372363176d5976904a19771660c2e8b",
"assets/NOTICES": "32ccbd299dc3b637f417f6b37521a918",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "00f63634abc6bb4e0a8ad6fc1fccf332",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "67516112146307b7f39dd6b4ec90b536",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f81b5216f0a482641a45d8cf815d9ff2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7179d596fd281a395745ad657ba83044",
"/": "7179d596fd281a395745ad657ba83044",
"main.dart.js": "57ff0805204c7c75feb8b15060dac3f0",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
