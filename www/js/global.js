const module = ons.bootstrap();
firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
});
const db = firebase.firestore();
const classes = ["A", "B3", "B", "C", "D"];
const grades = ["B1", "B2", "B3", "B4", "M1相当", "M2相当", "D1相当", "D2相当", "D3相当", "卒業生", "その他"];
const kana = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "他"];

//各種リスト作成
function makePlayerIndex(){
    playerIndex = {};
    count = 0;

    memberList.forEach(function(member) {
        const head = getRow(member.head);
        if(!playerIndex[head])playerIndex[head] = [];
        
        playerIndex[head].push({
            name: member.name,
            class: member.class,
            grade: member.grade,
            belong: member.belong,
            isMember: true,
            index: count++,
        });
    });

    guestList.forEach(function(guest) {
        const head = getRow(guest.head);
        if(!playerIndex[head])playerIndex[head] = [];
        
        playerIndex[head].push({
            name: guest.name,
            class: guest.class,
            belong: guest.belong,
            isMember: false,
            index: count++,
        });
    });
}

function makeMemberList(){
    memberList = [];

    return db.collection('Members').orderBy('head').get()
        .then(function(docs) {
            docs.forEach(function(doc) {
                const member = doc.data();

                memberList.push({
                    id: doc.id,
                    name: member.name,
                    head: member.head,
                    class: member.class,
                    grade: member.grade,
                    belong: member.belong,
                    rating: member.rating,
                    registerDate: member.registerDate,
                    classupDate: member.classupDate,
                });
            });

            makePlayerIndex();
        });
}

function makeGuestList(){
    guestList = [];

    return db.collection('Guests').orderBy('head').get()
        .then(function(docs) {
            docs.forEach(function(doc) {
                const guest = doc.data();

                guestList.push({
                    id: doc.id,
                    name: guest.name,
                    head: guest.head,
                    class: guest.class,
                    belong: guest.belong,
                });
            });

            makePlayerIndex();
        });
}

function makeSongerList(){
	songerList = [];
	
	return db.collection('Songers').get()
    	.then(function(docs) {
      		docs.forEach(function(doc) {
        		const songer = doc.data();

				songerList.push({
					id: doc.id,
					name: songer.name,
				});
            });
    	});
}

function makeGroupList(){
	groupList = [];
	groupIndex = {};
  
	return db.collection('Groups').get()
    	.then(function(docs) {
      		docs.forEach(function(doc) {
        		const group = doc.data();
        		const head = getRow(group.head);

				groupList.push({
					id: doc.id,
					name: group.name,
					head: head,
				});

        		if(!groupIndex[head]) groupIndex[head] = [];
        		groupIndex[head].push({
					id: doc.id,
					name: group.name,
					head: head,
		        });
      		});
    	});
}

function makeGameTypeList(){
	gameTypeList = [];
	
	return db.collection('GameTypes').orderBy('index').get()
    	.then(function(docs) {
      		docs.forEach(function(doc) {
        		const gameType = doc.data();

				gameTypeList.push({
					id: doc.id,
					name: gameType.name,
                    isRegular: gameType.isRegular,
                    index: gameType.index,
				});
      		});
    	});
}

function makeContestList(){
  contestList = [];

  return db.collection('Contests').where("isDone", "==", false).get()
    .then(function(docs) {
        docs.forEach(function(doc) {
            const contest = doc.data();

            contestList.push({
                id: doc.id,
                name: contest.name,
                date: contest.date,
            });
        });
    });
}

var songerList = [];
makeSongerList();

var playerIndex = {};

var gameTypeList = [];
makeGameTypeList();

var groupList = [];
var groupIndex = {};
makeGroupList();

var memberList = [];
makeMemberList();

var guestList = [];
makeGuestList();

var contestList = [];
makeContestList();

// var sysstart, semester;
// var admin_pass;

// Config.fetchAll()
//   .then(function(results){
//     results.forEach(function(result){
//       if(result.name == "sysstart"){
//         sysstart = result.value;
//       }
//       if(result.name == "semester"){
//         semester = result.value;
//       }
//       if(result.name == "admin_pass"){
//         admin_pass = result.value;
//       }
//     });
//   });

// var NODATA = "---";
// var SINGLE = "一人取り";

// var login_player = localStorage.getItem('player');
// var login_address = localStorage.getItem('address');
// if(!login_address) login_address = "boiler.archive@gmail.com";
// var login_admin = localStorage.getItem('admin');
