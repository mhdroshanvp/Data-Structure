class TrieNode {
    constructor() {
        this.home = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            const c = word[i]          
            if (!current.home[c]) {
                current.home[c] = new TrieNode()
            }
            current = current.home[c]
        }
        current.isEndOfWord = true
    }
    search(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            const c = word[i]
            if (!current.home[c]) {
                return false;
            }
            current = current.home[c]
        }
        return current.isEndOfWord
    }
    startWith(prefix) {
        let current = this.root
        for (let i = 0; i < prefix.length; i++) {
            const c = prefix[i]
            if (!current.home[c]) {
                return false
            }
            current = current.home[c]
        }
        return true
    }
    suggestions(prefix) {
        let node = this.root
        let suggestions = []
        for (let i = 0; i < prefix.length; i++) {
            let c = prefix[i]
            if (!node.home[c]) {
                return suggestions
            }
            node = node.home[c]
        }
        this.dfs(node, prefix, suggestions)
        return suggestions
    }
    dfs(node, prefix, suggestions) {
        if (node.isEndOfWord) suggestions.push(prefix)
        for (let key in node.home) {
            this.dfs(node.home[key], prefix + key, suggestions)
        }

    }
}

let t = new Trie()
t.insert("apple")
t.insert("api")
t.insert("ate")
t.insert("adam")
t.insert("kind")
console.log(t.search("api"));
console.log(t.suggestions("a"));