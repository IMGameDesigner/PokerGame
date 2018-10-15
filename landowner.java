package server;

public class landowner {
	landowner(){
		{int[] now_=new int[1];
		now_[0]=3;
		int[] all_=new int[8];
        all_[0]=3;
        all_[1]=3;
        all_[2]=3;
		all_[3]=4;
		all_[4]=4;
        all_[5]=4;
        all_[6]=5;
		all_[7]=6;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【单牌】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[2];
		now_[0]=3;
		now_[1]=3;
		int[] all_=new int[8];
        all_[0]=3;
        all_[1]=3;
        all_[2]=3;
		all_[3]=4;
		all_[4]=4;
        all_[5]=4;
        all_[6]=5;
		all_[7]=6;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【对子】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[3];
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		int[] all_=new int[8];
        all_[0]=3;
        all_[1]=3;
        all_[2]=3;
		all_[3]=4;
		all_[4]=4;
        all_[5]=4;
        all_[6]=5;
		all_[7]=6;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【三张】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[5];
		now_[0]=3;
		now_[1]=4;
		now_[2]=5;
		now_[3]=6;
		now_[4]=7;
		int[] all_=new int[8];
        all_[0]=4;
        all_[1]=5;
        all_[2]=5;
		all_[3]=6;
		all_[4]=6;
        all_[5]=6;
        all_[6]=7;
		all_[7]=8;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【单顺】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[6];
		now_[0]=3;
		now_[1]=3;
		now_[2]=4;
		now_[3]=4;
		now_[4]=5;
		now_[5]=5;
		int[] all_=new int[8];
        all_[0]=4;
        all_[1]=4;
        all_[2]=5;
		all_[3]=5;
		all_[4]=6;
        all_[5]=6;
        all_[6]=7;
		all_[7]=8;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【双顺】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[6];
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=4;
		now_[4]=4;
		now_[5]=4;
		int[] all_=new int[8];
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=5;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【三顺】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[5];
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=4;
		now_[4]=4;
		int[] all_=new int[8];
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=5;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【三带1】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[8];
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=4;
		now_[4]=4;
		now_[5]=4;
		now_[6]=5;
		now_[7]=7;
		int[] all_=new int[8];
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=5;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【飞机（三顺带等量单或顺）】"+i+"牌等级:"+out_[i]);
		}
		{int[] now_=new int[4];
		now_[0]=3;
		now_[1]=3;
		now_[2]=3;
		now_[3]=3;
		int[] all_=new int[16];
        all_[0]=4;
        all_[1]=4;
        all_[2]=4;
		all_[3]=4;
		all_[4]=5;
        all_[5]=5;
        all_[6]=7;
		all_[7]=8;
		all_[8]=8;
        all_[9]=8;
        all_[10]=9;
		all_[11]=9;
		all_[12]=9;
        all_[13]=10;
        all_[14]=11;
		all_[15]=12;
		int[] out_=this.AI_chupai(now_,all_);
		for(int i=0;i<=out_.length-1;i++)System.out.println("@@@@@@@@@@@@@@@@@(AI_chupai)【炸弹】"+i+"牌等级:"+out_[i]);
		}
	}
	public int[] AI_chupai(int[] nowpoker,int[] myallpoker){//输入内容为1~54的无序数组，输出一个无序pai-size队列
		int len1=nowpoker.length;
		int len2=myallpoker.length;
		//【等级化：】 [1->K 变为 3->K->2],[有色变无色],[53||54->14]
		for(int i=0;i<=len1-1;i++){
			if(nowpoker[i]>=53)nowpoker[i]=14;else{
			    nowpoker[i]=((nowpoker[i]-1)%13+1)-2;
				if(nowpoker[i]<=0)nowpoker[i]+=13;
			}
		}
		for(int i=0;i<=len2-1;i++){
			if(myallpoker[i]>=53)myallpoker[i]=14;else{
			    myallpoker[i]=((myallpoker[i]-1)%13+1)-2;
				if(myallpoker[i]<=0)myallpoker[i]+=13;
			}
		}
		//for(int i=0;i<=nowpoker.length-1;i++)//System.out.println("nowpoker"+i+"等级化结果："+nowpoker[i]);
		//for(int i=0;i<=myallpoker.length-1;i++)//System.out.println("myallpoker"+i+"等级化结果："+myallpoker[i]);
		////【等级化end】
		//统计每个size的数量:
		int[] paisum=new int[15];
		for(int i=1;i<=14;i++)paisum[i]=0;
		for(int i=0;i<=myallpoker.length-1;i++)paisum[myallpoker[i]]++;
		//统计每个size的数量end
		//排序：
		for(int i=0;i<=len1-1-1;i++)
			for(int j=i+1;j<=len1-1;j++)
				if(nowpoker[i]>nowpoker[j]){
					int h=nowpoker[i];
					nowpoker[i]=nowpoker[j];
					nowpoker[j]=h;
				}
		
		for(int i=0;i<=len2-1-1;i++)
			for(int j=i+1;j<=len2-1;j++)
				if(myallpoker[i]>myallpoker[j]){
					int h=myallpoker[i];
					myallpoker[i]=myallpoker[j];
					myallpoker[j]=h;
				}
		//for(int i=0;i<=nowpoker.length-1;i++)//System.out.println("nowpoker"+i+"排序结果："+nowpoker[i]);
		//for(int i=0;i<=myallpoker.length-1;i++)//System.out.println("myallpoker"+i+"排序结果："+myallpoker[i]);
		//排序结束
		
		//===============================================逻辑BEGIN
		if(myallpoker.length==0){
			int[] a=new int[0];
			return a;
		}
		if(nowpoker.length==0){//此处有空可以来补充
			int[] a=new int[0];
			return a;
		}
		if(isHuoJian(nowpoker)){
			int[] a=new int[0];
			return a;
		}
		if(isZhaDan(nowpoker)){
			//System.out.println("if nowpoker is 炸弹（可能AI会不跟炸弹）");
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			    for(int i=1;i<=14;i++){
				if(paisum[i]==4&&i>nowpoker[0]){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			//不出牌:
			int[] a=new int[0];
			return a;
		}
		if(isDanPai(nowpoker)){
			//System.out.println("if nowpoker is 单牌");
			for(int i=1;i<=14;i++){//从单牌中找牌
				if(paisum[i]==1&&i>nowpoker[0]){
					int[] a=new int[1];
					a[0]=i;
					//System.out.println("AI策略：从单牌中找牌 :"+i);
					return a;
				}
			}
			for(int i=1;i<=14;i++){//从对子或三张中取出单牌
				if(paisum[i]>=2&&paisum[i]<=3&&i>nowpoker[0]){
					int[] a=new int[1];
					a[0]=i;
					//System.out.println("AI策略：从对子或三张中取出单牌 :"+i);
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		if(isDuiZi(nowpoker)){
			//System.out.println("if nowpoker is 对子");
			for(int i=1;i<=14;i++){//从对子中选对子
				if(paisum[i]==2&&i>nowpoker[0]){
					int[] a=new int[2];
					a[0]=i;a[1]=i;
					//System.out.println("AI策略：从对子中选对子 :"+i);
					return a;
				}
			}
			for(int i=1;i<=14;i++){//从三张中取出对子
				if(paisum[i]==3&&i>nowpoker[0]){
					int[] a=new int[2];
					a[0]=i;a[1]=i;
					//System.out.println("AI策略：三张中取出对子 :"+i);
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		if(isSanZhang(nowpoker)){
			for(int i=1;i<=14;i++){//从三张中选三张
				if(paisum[i]==3&&i>nowpoker[0]){
					int[] a=new int[3];
					a[0]=i;a[1]=i;a[2]=i;
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		if(isDanShun(nowpoker)){
			//从王牌前的非炸弹中选顺子：
			for(int i=nowpoker[0]+1;i<=13-(nowpoker.length-1);i++){
				boolean is_=true;
				for(int j=1;j<=nowpoker.length;j++)if(paisum[i+j-1]<1||paisum[i+j-1]>3)is_=false;
				if(is_){
					int[] a=new int[nowpoker.length];
					for(int j=1;j<=nowpoker.length;j++)a[j-1]=i+j-1;
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		if(isShuangShun(nowpoker)){
			//从王牌前的长度2~3中选2顺：
			for(int i=nowpoker[0]+1;i<=13-(nowpoker.length/2-1);i++){
				boolean is_=true;
				for(int j=1;j<=nowpoker.length/2;j++)if(paisum[i+j-1]<=1||paisum[i+j-1]>=4)is_=false;
				if(is_){
					int[] a=new int[nowpoker.length];
					for(int j=1;j<=nowpoker.length/2;j++){
						a[j*2-2]=i+j-1;
						a[j*2-1]=i+j-1;
					}
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		if(isSanShun(nowpoker)){
			//从王牌前的长度3中选3顺：
			for(int i=nowpoker[0]+1;i<=13-(nowpoker.length/3-1);i++){
				boolean is_=true;
				for(int j=1;j<=nowpoker.length/3;j++)if(paisum[i+j-1]<=2||paisum[i+j-1]>=4)is_=false;
				if(is_){
					int[] a=new int[nowpoker.length];
					for(int j=1;j<=nowpoker.length/3;j++){
						a[j*3-3]=i+j-1;
						a[j*3-2]=i+j-1;
						a[j*3-1]=i+j-1;
					}
					return a;
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		if(isSanDaiYi(nowpoker)!=-1){
			for(int i=1;i<=14;i++){
				if(paisum[i]==3&&i>isSanDaiYi(nowpoker)){//找三张
					if(nowpoker.length==5){
						for(int j=1;j<=14;j++)if(paisum[j]==2){//找对子
							int[] a=new int[5];
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;a[4]=j;
					        return a;
						}
						for(int j=1;j<=14;j++)if(paisum[j]==3&&j!=i){//找三张取出对子
							int[] a=new int[5];
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;a[4]=j;
					        return a;
						}
					}
					if(nowpoker.length==4){
						for(int j=1;j<=14;j++)if(paisum[j]==1){//找单牌
							int[] a=new int[4];
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;
					        return a;
						}
						for(int j=1;j<=14;j++)if(paisum[j]==2){//找对子取出单牌
							int[] a=new int[4];
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;
					        return a;
						}
						for(int j=1;j<=14;j++)if(paisum[j]==3&&i!=j){//找三张取出单牌
							int[] a=new int[4];
					        a[0]=i;a[1]=i;a[2]=i;
							a[3]=j;
					        return a;
						}
					}
				}
			}
			//是否出炸弹:
			if(Math.random()<0.5){//随机确定  出炸弹火箭系列 or 不出牌
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		if(isFeiJi(nowpoker)!=-1){
			int get_=isFeiJi(nowpoker);
			int min=(get_/100);//三顺的最小size
            int max=get_%100;			//三顺的最大size
			int len_small=(nowpoker.length-(max-min+1)*3)/(max-min+1);//附带牌是单还是双
			//从王牌前的长度3中选3顺：
			for(int i=min+1;i<=13-(max-min);i++){//找开头
				boolean is_=true;
				for(int j=1;j<=(max-min+1);j++)if(paisum[i+j-1]<=2||paisum[i+j-1]>=4)is_=false;//找三顺
				if(is_){//如果三顺找到了
					int sum=0;//表示附带牌的总数
					int[] a=new int[nowpoker.length];
					for(int j=1;j<=13;j++)
						if(paisum[j]==len_small//从单牌中拿单牌，从对子中拿对子
					    ||(paisum[j]>len_small&&paisum[j]<=3&&(j<i||j>i+max-min))//从2或3中拿单牌，从3中拿对子
						)//找附带
						{
							for(int f=1;f<=len_small;f++)
							{
								sum++;
							    if(sum/len_small<=max-min+1)a[sum-1]=j;//先在输出数组中放入附带牌，数量等于len_small*(max-min+1)
							}
						}
					if(sum/len_small>=max-min+1){//如果附带找齐了
						for(int j=1;j<=max-min+1;j++){
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
			for(int i=1;i<=14;i++){
				if(paisum[i]==4){//出炸弹
					int[] a=new int[4];
					for(int j=0;j<=3;j++)a[j]=i;
					return a;
				}
			}
			if(paisum[14]==2){//出火箭
				int[] a=new int[2];
				for(int j=0;j<=1;j++)a[j]=14;
				return a;
			}
			}
			//是否出炸弹end
			int[] a=new int[0];
			return a;
		}
		//此部分若发生，代表现在桌子上的牌不是正确牌型：
		int[] a=new int[0];
		return a;
	}
	boolean isZhaDan(int[] poker){
		////System.out.println("begin (isZhaDan)");
		if(poker.length>=5||poker.length<=3)return false;
		if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]==poker[3])return true;
		return false;
	}
	boolean isHuoJian(int[] poker){
		////System.out.println("begin (isHuoJian)");
		if(poker.length!=2)return false;
		if(poker[0]==14&&poker[1]==14)return true;
		return false;
	}
	boolean isDanPai(int[] poker){
		////System.out.println("begin (isDanPai)");
		if(poker.length==1)return true;
		return false;
	}
	boolean isDuiZi(int[] poker){
		////System.out.println("begin (isDuiZi)");
		for(int i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
		if(poker.length!=2)return false;
		if(poker[0]==poker[1])return true;
		return false;
	}
	boolean isSanZhang(int[] poker){
		////System.out.println("begin (isSanZhang)");
		for(int i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
		if(poker.length!=3)return false;
		if(poker[0]==poker[1]&&poker[1]==poker[2])return true;
		return false;
	}
	boolean isDanShun(int[] poker){
		////System.out.println("begin (isDanShun)");
	    for(int i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
	    if(poker.length<=4)return false;
		boolean is_=true;
		for(int i=0;i<=poker.length-1-1;i++)
			if(poker[i+1]-poker[i]==1){}else{
				is_=false;
			}
		return is_;
	}
	boolean isShuangShun(int[] poker){
		////System.out.println("begin (isShuangShun)");
		for(int i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
		if(poker.length%2!=0||poker.length<=5)return false;
		for(int i=0;i<=poker.length/2-1;i++){
			if(poker[i*2]!=poker[i*2+1])return false;
		}
		for(int i=0;i<=poker.length/2-1-1;i++){
			if(poker[i*2]+1!=poker[i*2+2])return false;
		}
		return true;
	}
	boolean isSanShun(int[] poker){
		////System.out.println("begin (isSanShun)");
		for(int i=0;i<=poker.length-1;i++)if(poker[i]==14)return false;
		if(poker.length%3!=0||poker.length<=5)return false;
		for(int i=0;i<=poker.length/3-1;i++){
			if(poker[i*3]!=poker[i*3+1])return false;
		}
		for(int i=0;i<=poker.length/3-1-1;i++){
			if(poker[i*3]+1!=poker[i*3+3])return false;
		}
		return true;
	}
	int isSanDaiYi(int[] poker){
		////System.out.println("begin (isSanDaiYi)");
		for(int i=0;i<=poker.length-1;i++)if(poker[i]==14)return -1;
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
	int isFeiJi(int[] poker){
		////System.out.println("begin (isFeiJi)");
		for(int i=0;i<=poker.length-1;i++)if(poker[i]==14)return -1;
		//统计每个size的数量
		//for(int i=0;i<=poker.length-1;i++)//System.out.println("----"+i+"--pai-->"+poker[i]);
		int[] pai=new int[13];for(int i=0;i<=12;i++)pai[i]=0;
		for(int i=0;i<=poker.length-1;i++)pai[poker[i]-1]++;
		//for(int i=0;i<=12;i++)//System.out.println("----"+i+"--sum-->"+pai[i]);
		//取三张里的最大和最小size，记录几个三张。max-min=sum-1>=2 对，否则不是三顺
		int max=-10;
		int min=15;
		int sum=0;
		for(int i=0;i<=12;i++)if(pai[i]==3){
			if(i+1>max)max=i+1;
			if(i+1<min)min=i+1;
			sum++;
		}
		////System.out.println("max="+max);
		////System.out.println("min="+min);
		////System.out.println("sum="+sum);
		if(max-min==sum-1&&sum>=2){}else return -1;
		////System.out.println("function FeiJi: san shun true");
		//有单也有双，错
		int sum1=0;
		int sum2=0;
		for(int i=0;i<=12;i++){
			if(pai[i]==2)sum2++;
			if(pai[i]==1)sum1++;
		}
		if(sum2==0&&sum1==0)return -1;
		if(sum2!=0&&sum1!=0)return -1; 
		//判断单双的数量对否
		if(sum1!=0&&sum2==0)if(sum1!=sum)return -1;
		if(sum2!=0&&sum1==0)if(sum2!=sum)return -1;
		////System.out.println("function FeiJi: end is true");
		//------------------------
		return min*100+max;
	}
}
