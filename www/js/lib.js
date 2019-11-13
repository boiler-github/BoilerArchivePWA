//レーティング計算
function calcRatingChange(rWinner, rLoser, diff){
    if(rWinner - rLoser > 800)return 0;
    return parseInt((800 + (rLoser - rWinner) + diff * 10) / 20);
}

function isRegularType(typeName) {
    for(i = 0; i < gameTypeList.length; i++) {
        const type = gameTypeList[i];
        if (type.name == typeName) return type.isRegular;
    }
    return false;
}

//今日の日付
function today(){
    const now = new Date();
    return now.getFullYear() 
        + "-" + ("0" + (now.getMonth() + 1)).slice(-2)
        + "-" + ("0" + now.getDate()).slice(-2);
}

// 学期初め
function seminar() {
    const now = new Date();
    const month = now.getMonth() + 1;
    if (month >= 4 && month < 10) return now.getFullYear() + "-04-01";
    else if (month >= 10) return now.getFullYear() + "-10-01";
    else return (now.getFullYear() - 1) + "-10-01";
}

//五十音行取得
function getRow(chara){
    var kana = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "ん"];
    for(var i = 0; i < kana.length - 1; i++){
        if(kana[i] <= chara && chara < kana[i + 1])return kana[i];
    }
    return "他";
}

//各種アップデート
function insertMember(member) {
	var docRef;
	if(member.id) docRef = db.collection('Members').doc(member.id);
	else docRef = db.collection('Members').doc();

	return docRef.set({
        name: member.name,
        head: member.head,
        class: member.class,
        grade: member.grade,
        belong: member.belong,
        rating: member.rating,
        registerDate: member.registerDate,
        classupDate: member.classupDate,
    }).then(makeMemberList);
}

function deleteMember(member) {
  	return db.collection('Members').doc(member.id).delete()
    	.then(makeMemberList);
}

function insertGuest(guest) {
	var docRef;
	if(guest.id) docRef = db.collection('Guests').doc(guest.id);
	else docRef = db.collection('Guests').doc();

	return docRef.set({
        name: guest.name,
        head: guest.head,
        class: guest.class,
        belong: guest.belong,
    }).then(makeGuestList);
}

function deleteGuest(guest) {
  	return db.collection('Guests').doc(guest.id).delete()
    	.then(makeGuestList);
}

function insertSonger(songer) {
	var docRef;
	if(songer.id) docRef = db.collection('Songers').doc(songer.id);
	else docRef = db.collection('Songers').doc();

	return docRef.set({
    	name: songer.name,
  	}).then(makeSongerList);
}

function deleteSonger(songer) {
  	return db.collection('Songers').doc(songer.id).delete()
    	.then(makeSongerList);
}

function insertGroup(group) {
  	var docRef;
 	if(group.id) docRef = db.collection('Groups').doc(group.id);
  	else docRef = db.collection('Groups').doc();

  	return docRef.set({
    	name: group.name,
    	head: group.head,
  	}).then(makeGroupList);
}

function deleteGroup(group) {
  	return db.collection('Groups').doc(group.id).delete()
    	.then(makeGroupList);
}

function insertGameType(gameType) {
  	var docRef;
  	if(gameType.id) docRef = db.collection('GameTypes').doc(gameType.id);
  	else docRef = db.collection('GameTypes').doc();

  	return docRef.set({
    	name: gameType.name,
        isRegular: gameType.isRegular,
        index: gameType.index,
  	}).then(makeGameTypeList);
}

function deleteGameType(gameType) {
	return db.collection('GameTypes').doc(gameType.id).delete()
    	.then(makeGameTypeList);
}

function insertRecord(record) {
    var docRef;
    if(record.id) docRef = db.collection('Records').doc(record.id);
    else docRef = db.collection('Records').doc();

    return docRef.set({
        date: record.date,
        round: record.round,
        songer: record.songer,
        winner: record.winner,
        loser: record.loser,
        compareClass: record.compareClass,
        diff: record.diff,
        type: record.type,
        comment: record.comment,
        order: record.order,
        ratingChange: record.ratingChange,
    });
}

function deleteRecord(record) {
	return db.collection('Records').doc(record.id).delete();
}

function insertContest(contest) {
    var docRef;
    if(contest.id) docRef = db.collection('Contests').doc(contest.id);
    else docRef = db.collection('Contests').doc();

    return docRef.set({
        name: contest.name,
        date: contest.date,
        isDone: contest.isDone,
    }).then(makeContestList);
}

function deleteContest(contest) {
	return db.collection('Contests').doc(contest.id).delete();
}

function getContestPlayers(contest) {
    return db.collection('Contests').doc(contest.id).collection('Players').orderBy('class').get()
        .then(function(docs) {
            var players = [];
            
            docs.forEach(function(doc) {
                const player = doc.data();

                players.push({
                    id: doc.id,
                    name: player.name,
                    round: player.round,
                    class: player.class,
                });
            });

            return players;
        });
}

function insertContestPlayer(contest, player) {
    var docRef = db.collection('Contests').doc(contest.id).collection('Players');
    if (player.id) docRef = docRef.doc(player.id);
    else docRef = docRef.doc();

    return docRef.set({
        name: player.name,
        round: player.round,
        class: player.class,
    });
}

function getContestRecords(contest) {
    return db.collection('Contests').doc(contest.id).collection('Records').orderBy('round').orderBy('class').get()
        .then(function(docs) {
            var records = [];
            
            docs.forEach(function(doc) {
                const record = doc.data();

                records.push({
                    id: doc.id,
                    round: record.round,
                    player: record.player,
                    class: record.class,
                    opponent: record.opponent,
                    belong: record.belong,
                    result: record.result,
                    diff: record.diff,        
                });
            });

            return records;
        });
}

function insertContestRecord(contest, record) {
    var docRef = db.collection('Contests').doc(contest.id).collection('Records');
    if (record.id) docRef = docRef.doc(record.id);
    else docRef = docRef.doc();

    return docRef.set({
        round: record.round,
        player: record.player,
        class: record.class,
        opponent: record.opponent,
        belong: record.belong,
        result: record.result,
        diff: record.diff,             
    });
}

function getContestClassIndex(contest) {
    return db.collection('Contests').doc(contest.id).collection('Classes').get()
        .then(function(docs) {
            var classIndex = {};
            
            docs.forEach(function(doc) {
                const cl = doc.data();

                classIndex[cl.name] = {
                    id: doc.id,
                    name: cl.name,
                    count: cl.count,
                };
            });

            return classIndex;
        });
}

function insertContestClass(contest, cl) {
    var docRef = db.collection('Contests').doc(contest.id).collection('Classes');
    if (cl.id) docRef = docRef.doc(cl.id);
    else docRef = docRef.doc();

    return docRef.set({
        name: cl.name,
        count: cl.count,     
    });
}

function getPastContests(){
    return db.collection('Contests').where("isDone", "==", true).orderBy("date", "desc").get()
        .then(function(docs) {
            var contests = [];

            docs.forEach(function(doc) {
                const contest = doc.data();
  
                contests.push({
                    id: doc.id,
                    name: contest.name,
                    date: contest.date,
                });
            });

            return contests;
        });
}

function findMemberByName(name) {
    for(i = 0; i < memberList.length; i++) {
        if (memberList[i].name == name) return memberList[i];
    }
}

function findPlayerByName(name) {
    for (head in playerIndex) {
        for(i = 0; i < playerIndex[head].length; i++) {
            const player = playerIndex[head][i];
            if (player.name == name) return player;
        }
    }
}

function findAllRecordOfPlayer(name) {
    return Promise.all([
        db.collection("Records").where("winner", "==", name).get(),
        db.collection("Records").where("loser", "==", name).get(),
    ]).then(function(results) {
        var records = [];

        results.forEach(function(docs) {
            docs.forEach(function(doc) {
                const record = doc.data();
    
                records.push({
                    id: doc.id,
                    date: record.date,
                    round: record.round,
                    songer: record.songer,
                    winner: record.winner,
                    loser: record.loser,
                    compareClass: record.compareClass,
                    diff: record.diff,
                    type: record.type,
                    comment: record.comment,
                    order: record.order,
                    ratingChange: record.ratingChange,
                });
            });
        });

        return records;
    });
}

function findAllRecordOfQuery(query) {
    return query.orderBy("date").orderBy("round").get().then(function(docs) {
        var records = [];

        docs.forEach(function(doc) {
            const record = doc.data();

            records.push({
                id: doc.id,
                date: record.date,
                round: record.round,
                songer: record.songer,
                winner: record.winner,
                loser: record.loser,
                compareClass: record.compareClass,
                diff: record.diff,
                type: record.type,
                comment: record.comment,
                order: record.order,
                ratingChange: record.ratingChange,
            });
        });

        return records;
    });
}

//データ取得
// function getMember(name){
//   return Member.equalTo("name", name)
//           .fetch()
//           .then(function(member){
//             return {
//               name: member.name,
//               grade: member.grade,
//               class: member.class,
//               upgradeDate: member.upgradeDate,
//               rating: member.rating,
//               sumDiff: member.sumDiff,
//               total: member.total,
//               win: member.win,
//               results: member.results,
//             };
//           });
// }

// //条件に合うクラスを配列で返す
// function classArray(player_class, cond){
//   var index1 = classes.indexOf(player_class);
//   var index2 = index1 + 1;
//   if(player_class == "B" || player_class == "B3"){
//     index1 = 1;
//     index2 = 3;
//   }
//   if(cond == "格上")return classes.slice(0, index1);
//   if(cond == "同格")return classes.slice(index1, index2);
//   if(cond == "格下")return classes.slice(index2, 5);
// }

function compareClass(opp, self){
  if(self == "B" || self == "B3"){
    if(opp == "A")return 1;
    else if(opp == "B" || opp == "B3")return 0;
    else return -1;
  }
  else{
    if(opp < self)return 1;
    else if(opp == self)return 0;
    else return -1;
  }
}

// //戦績追加
// function addHistory(old, latest){
//   if(old.length == 10)
//     return old.slice(1, 10) + latest;
//   else
//     return old + latest;
// }

//日数計算
function dateDiff(from, to){
    const fromDate = new Date(from);
    const toDate = new Date(to);
    return parseInt((toDate - fromDate) / (60 * 60 * 24 * 1000)) + 1;
}

//表示用
function showClass(playerClass){
  if(playerClass == "B3")return "B級";
  else return playerClass + "級";
}

function showGrade(grade){
    return grade;
}

// //メール送信
// function sendMail(to, from, subject, content){
//   ncmb.Script
//     .data({
//       "to": to,
//       "from": from,
//       "subject": subject,
//       "content": content,
//     })
//     .exec("POST", "sendMail.js");
// }

function classDiff(class1, class2){
  var index1 = classes.indexOf(class1);
  if(index1 >= 2)index1--;
  
  var index2 = classes.indexOf(class2);
  if(index2 >= 2)index2--;
  
  return index1 - index2;
}

// function replaceRecords(field, search, replace){
//   Record.equalTo(field, search)
//     .count()
//     .fetchAll()
//     .then(function(results){
//       var all = results.count;
//       for(var s = 0; s < all; s += 100){
//         Record.equalTo(field, search)
//           .skip(s)
//           .fetchAll()
//           .then(function(res){
//             res.forEach(function(record){
//               record.set(field, replace)
//                 .update();
//             });
//           });
//       }
//     });
// }

// function replaceContestRecords(field, search, replace){
//   ContestRecord.equalTo(field, search)
//     .count()
//     .fetchAll()
//     .then(function(results){
//       var all = results.count;
//       for(var s = 0; s < all; s += 100){
//         ContestRecord.equalTo(field, search)
//           .skip(s)
//           .fetchAll()
//           .then(function(res){
//             res.forEach(function(record){
//               record.set(field, replace)
//                 .update();
//             });
//           });
//       }
//     });
// }

// function replaceName(search, replace){
//   replaceRecords("winner", search, replace);
//   replaceRecords("loser", search, replace);
//   replaceContestRecords("player", search, replace);
  
//   Member.fetchAll()
//     .then(function(res){
//       res.forEach(function(member){
//         if(!member.results)return;
//         var results = JSON.parse(member.results);
//         if(results[search]){
//           results[replace] = results[search];
//           delete results[search];
//           member.set("results", JSON.stringify(results))
//             .update();
//         }
//       });
//     });
// }

// function replaceGuests(field, search, replace){
//   Guest.equalTo(field, search)
//     .fetchAll()
//     .then(function(res){
//       res.forEach(function(guest){
//         guest.set(field, replace)
//           .update();
//       });
//     });
// }
