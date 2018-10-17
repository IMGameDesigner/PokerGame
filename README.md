### 满意请给个star
### [1.0原版js](https://github.com/IMGameDesigner/PokerGame/blob/master/a.js)
* 针对CocosCreator1.9.3,一副牌斗地主
* onload方法：内含测试数据和使用方法
* can_out_poker方法：输入两个无序（含1~54）数组（对手的出牌+自己打算出的牌），进行跟牌正误判断，输出false or true
* AI_chupai方法：输入两个无序（含1~54）数组（对手的出牌+自己的全部手牌），输出一个无序队列包含AI智能出牌结果（1代表小三，13代表2，14代表大小王，无花色区分）
* （1~54）1：A，2：2，13：K，14：A，53：小王，54：大王
### [1.1java版（修改了AI_chupai的部分bug）](https://github.com/IMGameDesigner/PokerGame/blob/master/landowner.java)
* 构造方法：内含测试数据和使用方法
* AI_chupai方法：输入两个无序（含1~54）数组（对手的出牌+自己的手牌），输出一个无序队列包含AI智能出牌结果（1代表小三，13代表2，14代表大小王，无花色区分）

