function levelOrderTraversal(root) {
    if (!root) {
        return [];
    }

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const level = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(level);
    }

    return result;
}
