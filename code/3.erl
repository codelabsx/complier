-moudle(leex).

%%1.首先读取xrl文件
%%2.其次解析xrl文件中的正则表达式
%%  正则表达式共有下面几种类型: 
%%  分别是符号, 可选, 联结, null, 重复
%%3. 然后就是解析正则表达式, 
%%4. 将正则表达式转化成NFA, 
%%5. 最后将



%%记录名称
-record(leex, {xfile=[],
               efile=[],
               iffile=[], %%include flie
               gfile=[],
               module,    %%moudle name
               opts=[],
               errors=[],
               warnings=[],
               xport=none, %%Xrl file port
               eport=none,
               iport=none,
               gport=none
               }).



-record(nfa_state, {no, edges=[], accept=noaccept}).
-record(dfa_state, {no, nfa=[], trans=[], accept=noaccept}).
