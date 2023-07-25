/*
下面这段程序实现了一个长效的函数式二叉树
*/

typedef char* String;
typedef struct tree* T_tree;

struct tree {T_tree left; String key; T_tree right};


void* checked_malloc(int len)
{
    void* p = malloc(len);
    assert(p);
    return p;
}


T_tree Tree(T_tree l, String k, T_tree r)
{
    T_tree t = checked_malloc(sizeof(*t));
    t->left = l;
    t->key = k;
    t->right = r;

    return t;
}

T_tree insert(String key, T_tree t) {
    if (t == NULL)
    {
        return Tree(NULL, key, NULL);
    } 

    else if (strcmp(key, t->key) < 0) 
    {

        return Tree(insert(key, t->left), t->key, t->right);
    }

    else if (strcmp)


    else 
    {
        return Tree(t->left, key, t->right);
    }
}