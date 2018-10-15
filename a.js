
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
		
		
		{var now_=new Array(3);
        now_[0]=3;
        now_[1]=1;
        now_[2]=1;
		var will_=new Array(3);
        will_[0]=2;
        will_[1]=2;
        will_[2]=2;
		cc.log("$$$$$$$$$$$$【cuo】:"+this.can_out_poker(now_,will_));//--> false
		}
		{var now_=new Array(8);
        now_[0]=3;
        now_[1]=3;
        now_[2]=3;
        now_[3]=4;
        now_[4]=4;
        now_[5]=4;
        now_[6]=5;
        now_[7]=6;
		var will_=new Array(8);
        will_[0]=7;
        will_[1]=7;
        will_[2]=7;
		will_[3]=8;
		will_[4]=8;
		will_[5]=8;
		will_[6]=9;
		will_[7]=10;
		cc.log("$$$$$$$$$$$【fei ji】 "+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(4);
        now_[0]=3;
        now_[1]=3;
        now_[2]=3;
        now_[3]=4;
		var will_=new Array(4);
        will_[0]=7;
        will_[1]=7;
        will_[2]=7;
		will_[3]=8;
		cc.log("$$$$$$$$$$$$$【san dai yi】 "+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(6);
        now_[0]=3;
        now_[1]=3;
        now_[2]=3;
        now_[3]=4;
        now_[4]=4;
        now_[5]=4;
		var will_=new Array(6);
        will_[0]=7;
        will_[1]=7;
        will_[2]=7;
		will_[3]=8;
		will_[4]=8;
		will_[5]=8;
		cc.log("$$$$$$$$$【3 shun】:"+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(6);
        now_[0]=3;
        now_[1]=3;
        now_[2]=4;
        now_[3]=4;
        now_[4]=5;
        now_[5]=5;
		var will_=new Array(6);
        will_[0]=7;
        will_[1]=7;
        will_[2]=8;
		will_[3]=8;
		will_[4]=9;
		will_[5]=9;
		cc.log("$$$$$$$$$【2 shun】:"+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(6);
        now_[0]=7;
        now_[1]=8;
        now_[2]=9;
        now_[3]=10;
        now_[4]=11;
        now_[5]=12;
		var will_=new Array(6);
        will_[0]=10;
        will_[1]=11;
        will_[2]=12;
		will_[3]=13;
		will_[4]=1;
		will_[5]=2;
		cc.log("$$$$$$$$$ 【1 shun】:"+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(3);
        now_[0]=1;
        now_[1]=1;
        now_[2]=1;
		var will_=new Array(3);
        will_[0]=2;
        will_[1]=2;
        will_[2]=2;
		cc.log("$$$$$$$$$$【3张】："+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(2);
        now_[0]=1;
        now_[1]=1;
		var will_=new Array(2);
        will_[0]=2;
        will_[1]=2;
		cc.log("$$$$$$$$$$【dui zi】："+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(1);
        now_[0]=1;
		var will_=new Array(1);
        will_[0]=2;
		cc.log("$$$$$$$$$$【dan pai】 ："+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(3);
        now_[0]=4;
        now_[1]=4;
        now_[2]=4;
		var will_=new Array(4);
        will_[0]=3;
        will_[1]=3;
        will_[2]=3;
		will_[3]=3;
		cc.log("$$$$$$$$$$$$【炸弹】干【三张】"+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(0);
		var will_=new Array(8);
        will_[0]=3;
        will_[1]=3;
        will_[2]=3;
		will_[3]=3;
		will_[4]=4;
        will_[5]=4;
        will_[6]=4;
		will_[7]=4;
		cc.log("$$$$$$$$$$$$【false】"+this.can_out_poker(now_,will_));
		}
		{var now_=new Array(0);
		var will_=new Array(8);
        will_[0]=1;
        will_[1]=1;
        will_[2]=1;
		will_[3]=2;
		will_[4]=2;
        will_[5]=2;
        will_[6]=5;
		will_[7]=6;
		cc.log("$$$$$$$$$$$$【fei ji】"+this.can_out_poker(now_,will_));
		}
		{var now_=new Array(1);
		now_[0]=3;
		var all_=new Array(8);
        all_[0]=3;
        all_[1]=3;
        all_[2]=3;
		all_[3]=4;
		all_[4]=4;
        all_[5]=4;
        all_[6]=5;
		all_[7]=6;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【单牌】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(2);
		now_[0]=3;
		now_[1]=3;
		var all_=new Array(8);
        all_[0]=3;
        all_[1]=3;
        all_[2]=3;
		all_[3]=4;
		all_[4]=4;
        all_[5]=4;
        all_[6]=5;
		all_[7]=6;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【对子】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(3);
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		var all_=new Array(8);
        all_[0]=3;
        all_[1]=3;
        all_[2]=3;
		all_[3]=4;
		all_[4]=4;
        all_[5]=4;
        all_[6]=5;
		all_[7]=6;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【三张】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(5);
		now_[0]=3;
		now_[1]=4;
		now_[2]=5;
		now_[3]=6;
		now_[4]=7;
		var all_=new Array(8);
        all_[0]=4;
        all_[1]=5;
        all_[2]=5;
		all_[3]=6;
		all_[4]=6;
        all_[5]=6;
        all_[6]=7;
		all_[7]=8;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【单顺】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(6);
		now_[0]=3;
		now_[1]=3;
		now_[2]=4;
		now_[3]=4;
		now_[4]=5;
		now_[5]=5;
		var all_=new Array(8);
        all_[0]=4;
        all_[1]=4;
        all_[2]=5;
		all_[3]=5;
		all_[4]=6;
        all_[5]=6;
        all_[6]=7;
		all_[7]=8;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【双顺】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(6);
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=4;
		now_[4]=4;
		now_[5]=4;
		var all_=new Array(8);
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=5;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【三顺】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(5);
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=4;
		now_[4]=4;
		var all_=new Array(8);
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=5;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【三带1】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(8);
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=4;
		now_[4]=4;
		now_[5]=4;
		now_[6]=5;
		now_[7]=7;
		var all_=new Array(8);
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=5;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【飞机（三顺带等量单或顺）】"+i+"牌等级:"+out_[i]);
		}
		{var now_=new Array(4);
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=3;
		var all_=new Array(8);
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=4;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		var out_=this.AI_chupai(now_,all_);
		for(var i=0;i<=out_.length-1;i++)cc.log("@@@@@@@@@@@@@@@@@(AI_chupai)【炸弹】"+i+"牌等级:"+out_[i]);
		}
	},
	can_out_poker:function(now_poker,will_poker){//输入两个数组，判断是否新牌组可以出
		var len1=now_poker.length;
		var len2=will_poker.length;
		if(len2==0)return false;
		//if(len1==0)return true;
		cc.log("//both？ not kong");
		//后面为两者都不为空的情况：
		//【等级化：】 [1->K 变为 3->K->2],[有色变无色],[53||54->14]
		for(var i=0;i<=len1-1;i++){
			if(now_poker[i]>=53)now_poker[i]=14;else{
			    now_poker[i]=((now_poker[i]-1)%13+1)-2;
				if(now_poker[i]<=0)now_poker[i]+=13;
			}
		}
		for(var i=0;i<=len2-1;i++){
			if(will_poker[i]>=53)will_poker[i]=14;else{
			    will_poker[i]=((will_poker[i]-1)%13+1)-2;
				if(will_poker[i]<=0)will_poker[i]+=13;
			}
		}
		//for(var i=0;i<=len1-1;i++)cc.log("等级化结果："+i+" --- "+now_poker[i]);
		//for(var i=0;i<=len2-1;i++)cc.log("等级化结果："+i+" --- "+will_poker[i]);
		////【等级化end】
		//排序：
		for(var i=0;i<=len1-1-1;i++)
			for(var j=i+1;j<=len1-1;j++)
				if(now_poker[i]>now_poker[j]){
					var h=now_poker[i];
					now_poker[i]=now_poker[j];
					now_poker[j]=h;
				}
		//for(var i=0;i<=len1-1;i++)cc.log("排序结果："+i+" --- "+now_poker[i]);
		
		for(var i=0;i<=len2-1-1;i++)
			for(var j=i+1;j<=len2-1;j++)
				if(will_poker[i]>will_poker[j]){
					var h=will_poker[i];
					will_poker[i]=will_poker[j];
					will_poker[j]=h;
				}
		//for(var i=0;i<=len2-1;i++)cc.log("排序结果："+i+" --- "+will_poker[i]);
		//排序结束
		if(len2==2&&will_poker[0]==14&&will_poker[1]==14)return true;//出牌为火箭
		if(len1==2&&now_poker[0]==14&&now_poker[1]==14)return false;//原牌为火箭
		cc.log("both not huo jian");
		//后面为两者都不为火箭的情况
		function isZhaDan(poker){
			if(poker.length>=5||poker.length<=3)return false;
			if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]==poker[3])return true;
			return false;
		}
		if(isZhaDan(now_poker)&&!isZhaDan(will_poker))return false;
		if(!isZhaDan(now_poker)&&isZhaDan(will_poker))return true;
		if(isZhaDan(now_poker)&&isZhaDan(will_poker)){
			if(now_poker[0]<will_poker[0])return true;
			return false;
		}
		cc.log("both not zha dan");
		//后面为两者都不是炸弹的情况：
		function isDanPai(poker){
			if(poker.length==1)return true;
			return false;
		}
		if(isDanPai(now_poker)&&isDanPai(will_poker)){
			if(now_poker[0]<will_poker[0])return true;
			cc.log("not dan pai ok");
		}
		if(len1==0&&isDanPai(will_poker))return true;
		for(var i=0;i<=len1-1;i++)if(now_poker[i]==14)return false;
		for(var i=0;i<=len2-1;i++)if(will_poker[i]==14)return false;
		//后面为不存在大王小王的情况：
		function isDuiZi(poker){
			if(poker.length!=2)return false;
			if(poker[0]==poker[1])return true;
			return false;
		}
		if(isDuiZi(now_poker)&&isDuiZi(will_poker)){
			if(now_poker[0]<will_poker[0])return true;
			cc.log("not dui zi ok");
		}
		if(len1==0&&isDuiZi(will_poker))return true;
		function isSanZhang(poker){
			if(poker.length!=3)return false;
			if(poker[0]==poker[1]&&poker[1]==poker[2])return true;
			return false;
		}
		if(isSanZhang(now_poker)&&isSanZhang(will_poker)){
			if(now_poker[0]<will_poker[0])return true;
			cc.log("not san zhang ok");
		}
		if(len1==0&&isSanZhang(will_poker))return true;
		function isDanShun(poker){//BY规则：不可用王（王在上面就卡死了），可用2(下同)
		    if(poker.length<=4)return false;
			var is_=true;
			for(var i=0;i<=poker.length-1-1;i++)
				if(poker[i+1]-poker[i]==1){}else{
					is_=false;
				}
			return is_;
		}
		if(isDanShun(now_poker)&&isDanShun(will_poker)){
			if(now_poker.length==will_poker.length&&will_poker[0]>now_poker[0])return true;
		}
		if(len1==0&&isDanShun(will_poker))return true;
		cc.log("not dan shun");
		function isShuangShun(poker){
			if(poker.length%2!=0||poker.length<=5)return false;
			for(var i=0;i<=poker.length/2-1;i++){
				if(poker[i*2]!=poker[i*2+1])return false;
			}
			for(var i=0;i<=poker.length/2-1-1;i++){
				if(poker[i*2]+1!=poker[i*2+2])return false;
			}
			return true;
		}
		if(isShuangShun(now_poker)&&isShuangShun(will_poker)){
			if(now_poker.length==will_poker.length&&will_poker[0]>now_poker[0])return true;
		}
		if(len1==0&&isShuangShun(will_poker))return true;
		cc.log("not 2 shun");
		function isSanShun(poker){
			if(poker.length%3!=0||poker.length<=5)return false;
			for(var i=0;i<=poker.length/3-1;i++){
				if(poker[i*3]!=poker[i*3+1])return false;
			}
			for(var i=0;i<=poker.length/3-1-1;i++){
				if(poker[i*3]+1!=poker[i*3+3])return false;
			}
			return true;
		}
		if(isSanShun(now_poker)&&isSanShun(will_poker)){
			if(now_poker.length==will_poker.length&&will_poker[0]>now_poker[0])return true;
		}
		if(len1==0&&isSanShun(will_poker))return true;
		cc.log("not 3 shun");
		function isSanDaiYi(poker){
			if(poker.length>=6||poker.length<=3)return -1;
			if(poker.length==4){
				if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]!=poker[3])return poker[0];
				if(poker[0]!=poker[1]&&poker[1]==poker[2]&&poker[2]==poker[3])return poker[3];
			}
			if(poker.length==5){
				if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]!=poker[3]&&poker[3]==poker[4])return poker[0];
				if(poker[0]==poker[1]&&poker[1]!=poker[2]&&poker[2]==poker[3]&&poker[3]==poker[4])return poker[4];
			}
			return -1;
		}
		if(isSanDaiYi(now_poker)!=-1&&isSanDaiYi(will_poker)!=-1){
			if(now_poker.length==will_poker.length&&isSanDaiYi(now_poker)<isSanDaiYi(will_poker))return true;
		}
		if(len1==0&&isSanDaiYi(will_poker)!=-1)return true;
		cc.log("not 3dai1");
		function isFeiJi(poker){
			//统计每个size的数量
			//for(var i=0;i<=poker.length-1;i++)cc.log("----"+i+"--pai-->"+poker[i]);
			var pai=new Array(13);for(var i=0;i<=12;i++)pai[i]=0;
			for(var i=0;i<=poker.length-1;i++)pai[poker[i]-1]++;
			//for(var i=0;i<=12;i++)cc.log("----"+i+"--sum-->"+pai[i]);
			//取三张里的最大和最小size，记录几个三张。max-min=sum-1>=2 对，否则不是三顺
			var max=-10;
			var min=15;
			var sum=0;
			for(var i=0;i<=12;i++)if(pai[i]==3){
				if(i+1>max)max=i+1;
				if(i+1<min)min=i+1;
				sum++;
			}
			//cc.log("max="+max);
			//cc.log("min="+min);
			//cc.log("sum="+sum);
			if(max-min==sum-1&&sum>=2){}else return -1;
			//cc.log("function FeiJi: san shun true");
			//有单也有双，错
			var sum1=0;
			var sum2=0;
			for(var i=0;i<=12;i++){
				if(pai[i]==2)sum2++;
				if(pai[i]==1)sum1++;
			}
			if(sum2==0&&sum1==0)return -1;
			if(sum2!=0&&sum1!=0)return -1; 
			//判断单双的数量对否
			if(sum1!=0&&sum2==0)if(sum1!=sum)return -1;
			if(sum2!=0&&sum1==0)if(sum2!=sum)return -1;
			//cc.log("function FeiJi: end is true");
			//------------------------
			return min;
		}
		if(isFeiJi(now_poker)!=-1&&isFeiJi(will_poker)!=-1){
			if(now_poker.length==will_poker.length&&isFeiJi(now_poker)<isFeiJi(will_poker))return true;
			//bug：333444555666778899JJ,4445556667778881234J
		}
		if(len1==0&&isFeiJi(will_poker)!=-1){
			return true;
		}
		cc.log("not feiji");
		//
		//-------------------------------
		return false;//不属于任何一种情况那就不可用
		
	},
	AI_chupai:function(nowpoker,myallpoker){//输入内容为1~54的无序数组，输出一个无序pai-size队列
		var len1=nowpoker.length;
		var len2=myallpoker.length;
		//【等级化：】 [1->K 变为 3->K->2],[有色变无色],[53||54->14]
		for(var i=0;i<=len1-1;i++){
			if(nowpoker[i]>=53)nowpoker[i]=14;else{
			    nowpoker[i]=((nowpoker[i]-1)%13+1)-2;
				if(nowpoker[i]<=0)nowpoker[i]+=13;
			}
		}
		for(var i=0;i<=len2-1;i++){
			if(myallpoker[i]>=53)myallpoker[i]=14;else{
			    myallpoker[i]=((myallpoker[i]-1)%13+1)-2;
				if(myallpoker[i]<=0)myallpoker[i]+=13;
			}
		}
		//for(var i=0;i<=nowpoker.length-1;i++)cc.log("nowpoker"+i+"等级化结果："+nowpoker[i]);
		//for(var i=0;i<=myallpoker.length-1;i++)cc.log("myallpoker"+i+"等级化结果："+myallpoker[i]);
		////【等级化end】
		//统计每个size的数量:
		var paisum=new Array(15);
		for(var i=1;i<=14;i++)paisum[i]=0;
		for(var i=0;i<=myallpoker.length-1;i++)paisum[myallpoker[i]]++;
		//统计每个size的数量end
		//排序：
		for(var i=0;i<=len1-1-1;i++)
			for(var j=i+1;j<=len1-1;j++)
				if(nowpoker[i]>nowpoker[j]){
					var h=nowpoker[i];
					nowpoker[i]=nowpoker[j];
					nowpoker[j]=h;
				}
		
		for(var i=0;i<=len2-1-1;i++)
			for(var j=i+1;j<=len2-1;j++)
				if(myallpoker[i]>myallpoker[j]){
					var h=myallpoker[i];
					myallpoker[i]=myallpoker[j];
					myallpoker[j]=h;
				}
		for(var i=0;i<=nowpoker.length-1;i++)cc.log("nowpoker"+i+"排序结果："+nowpoker[i]);
		for(var i=0;i<=myallpoker.length-1;i++)cc.log("myallpoker"+i+"排序结果："+myallpoker[i]);
		//排序结束
		function isZhaDan(poker){
			cc.log("begin (isZhaDan)");
			if(poker.length>=5||poker.length<=3)return false;
			if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]==poker[3])return true;
			return false;
		}
		function isHuoJian(poker){
			cc.log("begin (isHuoJian)");
			if(poker.length!=2)return false;
			if(poker[0]==14&&poker[1]==14)return true;
			return false;
		}
		function isDanPai(poker){
			cc.log("begin (isDanPai)");
			if(poker.length==1)return true;
			return false;
		}
		function isDuiZi(poker){
			cc.log("begin (isDuiZi)");
			for(var i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
			if(poker.length!=2)return false;
			if(poker[0]==poker[1])return true;
			return false;
		}
		function isSanZhang(poker){
			cc.log("begin (isSanZhang)");
			for(var i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
			if(poker.length!=3)return false;
			if(poker[0]==poker[1]&&poker[1]==poker[2])return true;
			return false;
		}
		function isDanShun(poker){
			cc.log("begin (isDanShun)");
		    for(var i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
		    if(poker.length<=4)return false;
			var is_=true;
			for(var i=0;i<=poker.length-1-1;i++)
				if(poker[i+1]-poker[i]==1){}else{
					is_=false;
				}
			return is_;
		}
		function isShuangShun(poker){
			cc.log("begin (isShuangShun)");
			for(var i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
			if(poker.length%2!=0||poker.length<=5)return false;
			for(var i=0;i<=poker.length/2-1;i++){
				if(poker[i*2]!=poker[i*2+1])return false;
			}
			for(var i=0;i<=poker.length/2-1-1;i++){
				if(poker[i*2]+1!=poker[i*2+2])return false;
			}
			return true;
		}
		function isSanShun(poker){
			cc.log("begin (isSanShun)");
			for(var i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
			if(poker.length%3!=0||poker.length<=5)return false;
			for(var i=0;i<=poker.length/3-1;i++){
				if(poker[i*3]!=poker[i*3+1])return false;
			}
			for(var i=0;i<=poker.length/3-1-1;i++){
				if(poker[i*3]+1!=poker[i*3+3])return false;
			}
			return true;
		}
		function isSanDaiYi(poker){
			cc.log("begin (isSanDaiYi)");
			for(var i=0;i<=poker.length-1;i++)if(poker[i]==14)return -1;
			if(poker.length>=6||poker.length<=3)return -1;
			if(poker.length==4){
				if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]!=poker[3])return poker[0];
				if(poker[0]!=poker[1]&&poker[1]==poker[2]&&poker[2]==poker[3])return poker[3];
			}
			if(poker.length==5){
				if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]!=poker[3]&&poker[3]==poker[4])return poker[0];
				if(poker[0]==poker[1]&&poker[1]!=poker[2]&&poker[2]==poker[3]&&poker[3]==poker[4])return poker[4];
			}
			return -1;
		}
		function isFeiJi(poker){
			cc.log("begin (isFeiJi)");
			for(var i=0;i<=poker.length-1;i++)if(poker[i]==14)return -1;
			//统计每个size的数量
			//for(var i=0;i<=poker.length-1;i++)cc.log("----"+i+"--pai-->"+poker[i]);
			var pai=new Array(13);for(var i=0;i<=12;i++)pai[i]=0;
			for(var i=0;i<=poker.length-1;i++)pai[poker[i]-1]++;
			//for(var i=0;i<=12;i++)cc.log("----"+i+"--sum-->"+pai[i]);
			//取三张里的最大和最小size，记录几个三张。max-min=sum-1>=2 对，否则不是三顺
			var max=-10;
			var min=15;
			var sum=0;
			for(var i=0;i<=12;i++)if(pai[i]==3){
				if(i+1>max)max=i+1;
				if(i+1<min)min=i+1;
				sum++;
			}
			//cc.log("max="+max);
			//cc.log("min="+min);
			//cc.log("sum="+sum);
			if(max-min==sum-1&&sum>=2){}else return -1;
			//cc.log("function FeiJi: san shun true");
			//有单也有双，错
			var sum1=0;
			var sum2=0;
			for(var i=0;i<=12;i++){
				if(pai[i]==2)sum2++;
				if(pai[i]==1)sum1++;
			}
			if(sum2==0&&sum1==0)return -1;
			if(sum2!=0&&sum1!=0)return -1; 
			//判断单双的数量对否
			if(sum1!=0&&sum2==0)if(sum1!=sum)return -1;
			if(sum2!=0&&sum1==0)if(sum2!=sum)return -1;
			//cc.log("function FeiJi: end is true");
			//------------------------
			return min*100+max;
		}
		//===============================================逻辑BEGIN
		if(myallpoker.length==0){
			var a=new Array(0);
			return a;
		}
		if(nowpoker.length==0){//此处有空可以来补充
			var a=new Array(0);
			return a;
		}
		if(isHuoJian(nowpoker)){
			var a=new Array(0);
			return a;
		}
		if(isZhaDan(nowpoker)){
			cc.log("if nowpoker is 炸弹（可能AI会不跟炸弹）");
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4&&i>nowpoker[0]){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出牌:
			var a=new Array(0);
			return a;
		}
		if(isDanPai(nowpoker)){
			cc.log("if nowpoker is 单牌");
			for(var i=1;i<=14;i++){//从单牌中找牌
				if(paisum[i]==1&&i>nowpoker[0]){
					var a=new Array(1);
					a[0]=i;
					cc.log("AI策略：从单牌中找牌 :"+i);
					return a;
				}
			}
			for(var i=1;i<=14;i++){//从对子或三张中取出单牌
				if(paisum[i]>=2&&paisum[i]<=3&&i>nowpoker[0]){
					var a=new Array(1);
					a[0]=i;
					cc.log("AI策略：从对子或三张中取出单牌 :"+i);
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			var a=new Array(0);
			return a;
		}
		if(isDuiZi(nowpoker)){
			cc.log("if nowpoker is 对子");
			for(var i=1;i<=14;i++){//从对子中选对子
				if(paisum[i]==2&&i>nowpoker[0]){
					var a=new Array(2);
					a[0]=i;a[1]=i;
					cc.log("AI策略：从对子中选对子 :"+i);
					return a;
				}
			}
			for(var i=1;i<=14;i++){//从三张中取出对子
				if(paisum[i]==3&&i>nowpoker[0]){
					var a=new Array(2);
					a[0]=i;a[1]=i;
					cc.log("AI策略：三张中取出对子 :"+i);
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			var a=new Array(0);
			return a;
		}
		if(isSanZhang(nowpoker)){
			for(var i=1;i<=14;i++){//从三张中选三张
				if(paisum[i]==3&&i>nowpoker[0]){
					var a=new Array(3);
					a[0]=i;a[1]=i;a[2]=i;
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出：
			var a=new Array(0);
			return a;
		}
		if(isDanShun(nowpoker)){
			//从王牌前的非炸弹中选顺子：
			for(var i=nowpoker[0]+1;i<=13-(nowpoker.length-1);i++){
				var is_=true;
				for(var j=1;j<=nowpoker.length;j++)if(paisum[i+j-1]<1||paisum[i+j-1]>3)is_=false;
				if(is_){
					var a=new Array(nowpoker.length);
					for(var j=1;j<=nowpoker.length;j++)a[j-1]=i+j-1;
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出：
			var a=new Array(0);
			return a;
		}
		if(isShuangShun(nowpoker)){
			//从王牌前的长度2~3中选2顺：
			for(var i=nowpoker[0]+1;i<=13-(nowpoker.length/2-1);i++){
				var is_=true;
				for(var j=1;j<=nowpoker.length/2;j++)if(paisum[i+j-1]<=1||paisum[i+j-1]>=4)is_=false;
				if(is_){
					var a=new Array(nowpoker.length);
					for(var j=1;j<=nowpoker.length/2;j++){
						a[j*2-2]=i+j-1;
						a[j*2-1]=i+j-1;
					}
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出：
			var a=new Array(0);
			return a;
		}
		if(isSanShun(nowpoker)){
			//从王牌前的长度3中选3顺：
			for(var i=nowpoker[0]+1;i<=13-(nowpoker.length/3-1);i++){
				var is_=true;
				for(var j=1;j<=nowpoker.length/3;j++)if(paisum[i+j-1]<=2||paisum[i+j-1]>=4)is_=false;
				if(is_){
					var a=new Array(nowpoker.length);
					for(var j=1;j<=nowpoker.length/3;j++){
						a[j*3-3]=i+j-1;
						a[j*3-2]=i+j-1;
						a[j*3-1]=i+j-1;
					}
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出：
			var a=new Array(0);
			return a;
		}
		if(isSanDaiYi(nowpoker)!=-1){
			for(var i=1;i<=14;i++){
				if(paisum[i]==3&&i>isSanDaiYi(nowpoker)){//找三张
					if(nowpoker.length==5){
						for(var j=1;j<=14;j++)if(paisum[j]==2){//找对子
							var a=new Array(5);
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;a[4]=j;
					        return a;
						}
						for(var j=1;j<=14;j++)if(paisum[j]==3&&j!=i){//找三张取出对子
							var a=new Array(5);
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;a[4]=j;
					        return a;
						}
					}
					if(nowpoker.length==4){
						for(var j=1;j<=14;j++)if(paisum[j]==1){//找单牌
							var a=new Array(4);
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;
					        return a;
						}
						for(var j=1;j<=14;j++)if(paisum[j]==2){//找对子取出单牌
							var a=new Array(4);
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;
					        return a;
						}
						for(var j=1;j<=14;j++)if(paisum[j]==3&&i!=j){//找三张取出单牌
							var a=new Array(4);
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;
					        return a;
						}
					}
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出：
			var a=new Array(0);
			return a;
		}
		if(isFeiJi(nowpoker)!=-1){
			var get_=isFeiJi(nowpoker);
			var min=parseInt(get_/100);//三顺的最小size
            var max=get_%100;			//三顺的最大size
			var len_small=(nowpoker.length-(max-min+1)*3)/(max-min+1);//附带牌是单还是双
			//从王牌前的长度3中选3顺：
			for(var i=min+1;i<=13-(max-min);i++){//找开头
				var is_=true;
				for(var j=1;j<=(max-min+1);j++)if(paisum[i+j-1]<=2||paisum[i+j-1]>=4)is_=false;//找三顺
				if(is_){//如果三顺找到了
					var sum=0;//表示附带牌的总数
					var a=new Array(nowpoker.length);
					for(var j=1;j<=13;j++)
						if(paisum[j]==len_small//从单牌中拿单牌，从对子中拿对子
					    ||(paisum[j]>len_small&&paisum[j]<=3&&(j<i||j>i+max-min))//从2或3中拿单牌，从3中拿对子
						)//找附带
						{
							for(var f=1;f<=len_small;f++)
							{
								sum++;
							    if(sum/len_small<=max-min+1)a[sum-1]=j;//先在输出数组中放入附带牌，数量等于len_small*(max-min+1)
							}
						}
					if(sum/len_small>=max-min+1){//如果附带找齐了
						for(var j=1;j<=max-min+1;j++){
						    a[(max-min+1)*len_small+j*3-3]=i+j-1;//在附带牌的后面加上三顺，(max-min+1)*len_small是附带牌的占位
						    a[(max-min+1)*len_small+j*3-2]=i+j-1;
						    a[(max-min+1)*len_small+j*3-1]=i+j-1;
					    }
					    return a;
					}
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(var i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					var a=new Array(4);
					for(var j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				var a=new Array(2);
				for(var j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出：
			var a=new Array(0);
			return a;
		}
	},
});
