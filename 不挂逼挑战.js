var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"author:刘银@我打"},"\n","\n","\n","\n","^说明：你从老家来昆山挣钱，在这里会有各种选择，做出合理的选择避免挂壁吧😜",{"#":"CLASS:explain"},"\n","^大家中秋快乐呀，跟家人好好联系，吃个月饼🍪",{"#":"CLASS:explain"},"\n","ev","str","^第一章：初到昆山","/str","/ev",{"*":"0.c-0","flg":4},"ev","str","^第二章：入职昆山仁保","/str","/ev",{"*":"0.c-1","flg":4},{"c-0":["^ ","\n",{"->":"chapter1"},{"->":"0.g-0"},{"#f":5}],"c-1":["^ ","\n",{"->":"chapter2"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"ad":["^识别下方二维码，添加周薪薪经纪人好友，不挂壁","\n",{"#":"QRIMAGE:buguabi_QRcode.png"},"^希望你能在经纪人的带领下，生活越来越好","\n","end",{"#f":1}],"chapter3":["^作者还没写，联系经纪人催更。","\n","^也可以分享你的故事，有可能改编到游戏里哦😆","\n","end",{"#f":1}],"chapter1":[["^忙完农活，你一个人从老家来到昆山谋生，8小时的大巴让你感觉很累","\n","^“是先找工作还是休息一晚明天再说呢？”","\n","ev","str","^现在就找工作","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"chapter1.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^先休息一天再说",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"1_1"},{"#f":5}],"c-1":["ev",{"^->":"chapter1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"effort"},1,"-",{"VAR=":"effort","re":true},"/ev","ev",{"VAR?":"mood"},1,"+",{"VAR=":"mood","re":true},"/ev",{"->":"1_2"},{"#f":5}]}],{"#f":1}],"1_1":["ev",{"VAR?":"effort"},1,"+",{"VAR=":"effort","re":true},"/ev","ev",{"VAR?":"mood"},1,"-",{"VAR=":"mood","re":true},"/ev",{"#":"IMAGE:no_money.gif"},"^看了看自己的钱包，还是先挣钱要紧","\n","^你漫无目的逛了一圈，现在工价基本都是20多，这可比在家剥玉米挣得多了","\n","^仁保还在大量招人呀，你感叹，这是你三年前第一次打工进的厂，人换了一拨又一拨，但厂还是那个厂，铁打的企业流水的工人","\n","^你本想今天报名进仁保，但今天都已经发完车了，只能明天再进厂","\n",{"->":"1_2"},{"#f":1}],"1_2":[["^于是你往中华园外走","\n",["ev",{"^->":"1_2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^先去吃个饭吧",{"->":"$r","var":true},null]}],"ev","str","^先找个住的地方","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"1_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"1_3"},{"#f":5}],"c-1":["\n",{"->":"1_4"},{"#f":5}]}],{"#f":1}],"1_3":["^在中华园附近花15块点了份猪脚饭吃，你的精神有所恢复，准备找个地方今晚睡一觉","\n",{"->":"1_4"},{"#f":1}],"1_4":[["^路上看到几家旅馆，但最便宜的也要85块，你身上的钱已经不多了","\n",["ev",{"^->":"1_4.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^先住一晚再说 ",{"->":"$r","var":true},null]}],["ev",{"^->":"1_4.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^还是再找找吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"1_4.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"1_5"},"\n",{"#f":5}],"c-1":["ev",{"^->":"1_4.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^,毕竟没啥钱了😭","\n",{"->":"1_6"},{"#f":5}]}],{"#f":1}],"1_5":[["^你在旅馆前台花了85开了间房，因为太累，放好行李洗完澡，准备入睡。这时你看到垃圾篓里有一张小卡片。","\n",["ev",{"^->":"1_5.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你拿起小卡片",{"->":"$r","var":true},null]}],"ev","str","^还是自己睡吧","/str","/ev",{"*":".^.c-1","flg":4},["ev",{"^->":"1_5.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^你把卡片重新扔回垃圾篓",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"1_5.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^,上面印着一个衣着暴露的妹子和一串电话号码","\n",[["ev",{"^->":"1_5.0.c-0.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^看到这可不困了",{"->":"$r","var":true},null]}],["ev",{"^->":"1_5.0.c-0.8.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^不要想这有的没的",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"1_5.0.c-0.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^,你准备拨打电话","\n","^真的要打电话吗","\n",["ev","str","^打电话","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^还是算了","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^真的要打电话吗","\n",["ev","str","^真的","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^难道还有假的？","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"1_13"},{"#f":5}],"c-1":["\n",{"->":"1_13"},{"#f":5}]}],{"#f":5}],"c-1":["\n",{"->":"1_15"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"1_5.0.c-0.8.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"^,你直接睡觉了","\n",{"->":"1_15"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^你开了空调倒头就睡，模糊中似乎听到了雨声","\n",{"->":"1_15"},{"#f":5}],"c-2":["ev",{"^->":"1_5.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","^开了空调倒头就睡，模糊中似乎听到了雨声","\n",{"->":"1_15"},{"#f":5}]}],{"#f":1}],"1_13":["^你打了电话，一个多小时后，一个女生来敲门了，你开了门，但同时几个壮汉也跟着进来。你遇到了仙人跳，你挂壁了。","\n","^温馨提示：警惕诱惑，做遵纪守法好公民 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"1_6":[["^你走着走着，又回到了中华园，这时有人过来，递给你一张名片","\n","^“靓仔，要床位吗？”","\n","^“多少钱一晚？”","\n","^“25”","\n","^“几人间呀。”","\n","^“12人间，干净卫生。”","\n","ev","str","^不去","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"1_6.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^接过名片，跟老板过去",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"1_8"},{"#f":5}],"c-1":["ev",{"^->":"1_6.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"\n",{"->":"1_7"},{"#f":5}]}],{"#f":1}],"1_7":["^跟着老板来到了一个房间，里面已经塞满了6张床，还有股刺鼻的味道。你已经心生退意，但确实是疲惫，今晚只能将就将就了。于是将行李放在床上，在其他人的鼾声中睡去","\n","^……","\n","^……","\n","^第二天起床，你发现手机和钱包都被偷走，你挂壁了","\n","^温馨提示：出门在外，要注意自己的财务安全 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"1_8":[["^你摇摇头不理老板。但，今晚睡哪里好呢？","\n","^你想起了三年前一起从村里出来的","ev",{"VAR?":"friend"},"out","/ev","\n","^你们进的第一个厂也是仁保","\n","^三年间，你换了一个又一个厂","\n","^而","ev",{"VAR?":"friend"},"out","/ev","^和女朋友在仁保附近租房安了个家","\n",["ev",{"^->":"1_8.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^今晚去","ev",{"VAR?":"friend"},"out","/ev","^家住一晚吧",{"->":"$r","var":true},null]}],["ev",{"^->":"1_8.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^还是自己找地方住吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"1_8.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],"\n",{"->":"1_9"},{"#f":5}],"c-1":["ev",{"^->":"1_8.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"\n",{"->":"1_12"},{"#f":5}]}],{"#f":1}],"1_9":[["^你给","ev",{"VAR?":"friend"},"out","/ev","^打了个语音，他爽快地发了定位过来","\n","^顺着定位来到了","ev",{"VAR?":"friend"},"out","/ev","^的家里","\n","ev",{"VAR?":"friend"},"out","/ev","^的老婆","ev",{"VAR?":"friend_wife"},"out","/ev","^早已准备了不算丰盛的饭菜，桌上还放了两瓶啤酒","\n","^“要来两杯吗？”老友问你","\n","ev","str","^喝两杯","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^不喝了","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"1_10"},{"#f":5}],"c-1":["\n",{"->":"1_11"},{"#f":5}]}],{"#f":1}],"1_10":["^你很感激","ev",{"VAR?":"friend"},"out","/ev","^，于是跟多年的老乡喝起了酒","\n","^...","\n","^在老友家的沙发上睡了一晚","\n","^...","\n","^第二天回到中华园，跟着中介进了仁保","\n","^在仁保，你顺利地进行了面试体检，当晚住进了仁保的宿舍","\n","^第三天，你接到通知，体检不过，因为体检前一天你喝了酒","\n","^于是你挂壁了😭","\n","^温馨提示：体检前一天不要熬夜喝酒，不要吃辛辣食物哦 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"1_11":["^你很感激","ev",{"VAR?":"friend"},"out","/ev","^，但因为明天要进厂，你只吃饭不喝酒，","ev",{"VAR?":"friend"},"out","/ev","^也表示理解。吃完饭你跟老友回忆往事，因为一天的折腾，你说这说着就睡着了","\n","^……","\n","^……","\n",{"->":"1_15"},{"#f":1}],"1_15":[["^第二天回到中华园，跟着中介进了仁保","\n","^面试体检都很顺利，你开始了在仁保的生活","\n","^第一章挑战成功！👍",{"#":"CLASS:success"},"\n","ev","str","^进入下一章","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^获取不挂逼秘诀","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^结束游戏","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"->":"chapter2"},{"#f":5}],"c-1":["\n",{"->":"ad"},{"#f":5}],"c-2":["\n","end",{"#f":5}]}],{"#f":1}],"1_12":["^晚上，你在公园找了块草地，将背包当作枕头，在蚊子声和车声中艰难入睡","\n","^迷迷糊糊中，你感到湿湿凉凉的","\n","^“卧槽，下雨了”","\n","^你赶紧起来，找个屋檐躲雨，一夜无眠","\n","^……","\n","^……","\n","^第二天，你跟着中介的车去了仁保，面试很顺利，体检费要30，幸好你昨晚没花钱住宿，身上还有点钱做体检。","\n","^第三天，体检结果出来，因为你前一天晚上没睡好，导致体检不及格","\n","^于是你挂壁了😭","\n","^温馨提示：体检前一天不要熬夜喝酒，不要吃辛辣食物哦 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"chapter2":[["^入职仁保第二天，开始培训，你对一起培训的小芳产生了好感，培训结束后","\n",["ev",{"^->":"chapter2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^跟她要微信",{"->":"$r","var":true},null]}],"ev","str","^溜了溜了","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"chapter2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"2_1"},{"#f":5}],"c-1":["\n",{"->":"2_6"},{"#f":5}]}],{"#f":1}],"2_1":[["^比想象中的顺利，你要到了小芳的微信。前两天你们聊得很火热，你甚至开始思考以后儿子叫什么名字。","\n","^第三天，小芳告诉你她爷爷在老家种茶叶，为了守住爷爷的茶庄，她想让你出钱买一些茶叶。","\n",["ev",{"^->":"2_1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^梭哈，赢了老婆孩子热炕头",{"->":"$r","var":true},null]}],["ev",{"^->":"2_1.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^发5.20红包给小芳",{"->":"$r","var":true},null]}],["ev",{"^->":"2_1.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^直接将小芳微信拉黑",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"2_1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"2_3"},{"#f":5}],"c-1":["ev",{"^->":"2_1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"2_5"},{"#f":5}],"c-2":["ev",{"^->":"2_1.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"2_4"},{"#f":5}]}],{"#f":1}],"2_3":[{"#":"IMAGE:suoha.jpg"},"^你把全部身家都微信转账给小芳了，小芳即时收款。你怕这笔钱不够，于是发了条消息过去“我刚来工作，身上没啥钱，如果不够的话，我可以待会去贷款的”，但这条消息发送失败，小芳将你拉黑了。","\n","^身无分文的你挂壁了","\n","^温馨提示：注意防骗 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"2_5":["^小芳回了条消息“浪费我时间”，把红包收了后将你拉黑了","\n","^一颗真心为了狗，你的心情很低落","\n","^……","\n",{"->":"2_6"},{"#f":1}],"2_4":["^第二天，你看到小芳跟线上的铁柱在一起","\n","^……","\n",{"->":"2_6"},{"#f":1}],"2_6":[["^来仁保的这几天，你一直睡不好，上班打瞌睡，线长就这事说了你好几次。主要是宿舍的赖子大晚上的一直在打游戏，经常喊着“推塔推塔”“不服solo”，早上闹钟又定得很早，大家都起来了，就他自己在睡觉不关闹钟。今天，你实在忍不了了","\n","ev","str","^找宿管解决","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^找赖子商量解决","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^胖揍赖子一顿","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^你去找宿管，反映赖子影响大家睡觉。","\n","^“这点小事自己解决去，别来烦我。”宿管不耐烦地回你一句。","\n",["ev","str","^胖揍宿管一顿","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^给宿管递根华子","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^找赖子商量解决","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^胖揍赖子一顿","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^你没忍住打了宿管一顿","\n",{"->":"2_7"},{"#f":5}],"c-1":["\n",{"->":"2_8"},{"#f":5}],"c-2":["\n",{"->":"2_9"},{"#f":5}],"c-3":["\n","^你揍了赖子一顿，用沙煲大的拳头发泄着你的不爽","\n",{"->":"2_7"},{"#f":5}]}],{"#f":5}],"c-1":["\n",{"->":"2_9"},{"#f":5}],"c-2":["\n","^你揍了赖子一顿，用沙煲大的拳头发泄着你的不爽","\n",{"->":"2_7"},{"#f":5}]}],{"#f":1}],"2_7":["^因为打架斗殴，你被厂里辞退，挂壁了","\n","^温馨提示：打赢坐牢，打输住院，要用文明的方式解决问题 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"2_8":["^你给宿管递了根华子，请宿管帮帮忙。宿管很快去宿舍警告赖子，如果继续这样，就把他赶出宿舍。自此，你的睡眠有所改善","\n",{"->":"2_10"},{"#f":1}],"2_9":[["^你来到赖子床边，想让他以后早点睡觉，不要影响大家","\n",{"#":"IMAGE:玩王者.jpg"},"^赖子盯着手机“中路集合……再来打扰我打游戏，小心我沙煲大的拳头”","\n","ev","str","^再去找宿管，给宿管递根华子","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^胖揍赖子一顿","/str","/ev",{"*":".^.c-1","flg":4},["ev",{"^->":"2_9.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^提议帮赖子上白银",{"->":"$r","var":true},null]}],["ev",{"^->":"2_9.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^忍气吞声",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"2_8"},{"#f":5}],"c-1":["\n","^你揍了赖子一顿，用沙煲大的拳头发泄着你的不爽","\n",{"->":"2_7"},{"#f":5}],"c-2":["ev",{"^->":"2_9.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],"\n","^你顺利帮赖子上了白银后，他在“布吉岛小学三年二班群”留下了一句“无敌是多么寂寞。”","\n",{"#":"IMAGE:小学生王者.jpg"},"^赖子自此晚上不玩游戏，你的睡眠得以改善，宿舍的其他人对你产生好感。","\n",{"->":"2_10"},{"#f":5}],"c-3":["ev",{"^->":"2_9.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"\n","^你的睡眠质量依旧不好，赖子晚上打游戏喊得更大声了。","\n","^后来因为严重不足，你猝死在岗位上，挂壁了。","\n","^温馨提示：维护自身利益，工作之余，也好保证基本的休息 ",{"#":"CLASS:tip"},"\n","end",{"#f":5}]}],{"#f":1}],"2_10":[["^……","\n","^……","\n","^解决赖子的问题后，你上班有精神了，心情也好了起来。你打望四周，发现小思挺好看的，虽然经过小芳的事情，你还是心动起来，想跟小思交朋友。","\n",["ev",{"^->":"2_10.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^跟她要微信",{"->":"$r","var":true},null]}],["ev",{"^->":"2_10.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^帮她干活",{"->":"$r","var":true},null]}],["ev",{"^->":"2_10.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^没钱没底气",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"2_10.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"2_12"},{"#f":5}],"c-1":["ev",{"^->":"2_10.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","^你走到小思身边，帮小思干活，你们开始聊天，你跟小思要了微信，但因为车间不能带手机，临下班了，小思告诉你手机号，你一直在脑子里重复号码，最后加了小思微信。","\n","^你没有跟小思走到最后，因为没有钱，你跟小思的约会只能去压马路，小思不喜欢这活动，后面你们渐渐没联系了。","\n",{"->":"2_11"},{"#f":5}],"c-2":["ev",{"^->":"2_10.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","^因为还没发工资，你没有自信去搭讪小思","\n",{"->":"2_11"},{"#f":5}]}],{"#f":1}],"2_12":[["^“加微信干什么呀？”","\n","^“有空一起出去玩呀”","\n","^“玩什么呢？”","\n","^你为难了，因为还没发工资，没有钱进行什么活动…   …","\n",["ev",{"^->":"2_12.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“去压马路”",{"->":"$r","var":true},null]}],["ev",{"^->":"2_12.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^“去马路上散步”",{"->":"$r","var":true},null]}],["ev",{"^->":"2_12.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^“一起到路上走走”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"2_12.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"2_12.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"2_12.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^“算了，我不喜欢这个”小思说","\n",{"->":"2_11"},{"#f":5}]}],{"#f":1}],"2_11":[["^半个月后，小思跟宿舍的铁柱走到了一起。你看到他们经常出去玩，你感到很奇怪，于是去问铁柱：“不是还没发工资吗，你咋有钱经常出去约会？”","\n","^“可我有周薪呀？”","\n","^“什么周薪？为啥我没有？”","\n","^“我从周薪薪进的厂，每周都提前发600的周薪。之前都是每周花600，剩下的钱存起来的，现在泡妞刚好用上”","\n","^虽然现在不能领周薪，但你也开始尝试改善自己的消费习惯了，对周薪薪也有了初步印象。","\n","^三个月后，仁保工期结束，不像之前一样月光，这三个月你一共赞下了2000块，你准备先休息几天继续进厂。","\n","^……","\n",["ev",{"^->":"2_11.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^再去中华园",{"->":"$r","var":true},null]}],["ev",{"^->":"2_11.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^联系周薪薪",{"->":"$r","var":true},null]}],["ev",{"^->":"2_11.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^结束游戏",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"2_11.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"chapter3"},{"#f":5}],"c-1":["ev",{"^->":"2_11.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n",{"->":"ad"},{"#f":5}],"c-2":["ev",{"^->":"2_11.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"effort"},0,{"VAR=":"mood"},"str","^张三","/str",{"VAR=":"friend"},"str","^翠花","/str",{"VAR=":"friend_wife"},"/ev","end",null],"#f":1}],"listDefs":{}};