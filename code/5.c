#include <stdio.h>

#include "util.h"

typedef struct Symbol_* Symbol;

//只用创建一个这个结构体就可以了
struct Symbol_ {
    //符号的名称
    String name;

    //所属于的作用域
    Scope enclosingScope;

    //可见性
    int visibility;

    //关联的ast节点
    parserruleContext ctx;

    union {

        //作用域
        struct Scope { Symbol[] Symbols; } scope;
        //表示块级作用域
        struct Block {} block;

        //函数作用域
        struct Function{} function;

        //类作用域
        
    } u;
}

int main()
{
    return 0;
}