const Result = union {
    int  : i46,
    float: f64,
    bool : bool
};

const S = struct {
    
};

pub fn alloc(size : i32) {
    const allocator = std.heap.page_allocator;
    const memory = try allocator.alloc(u8, size);
    return memory;
}