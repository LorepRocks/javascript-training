/**  
 * https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem
 * 
 * Consider an undirected graph consisting of  nodes where each node is labeled from  to  and the edge between 
 * any two nodes is always of length . We define node  to be the starting position for a BFS. Given a graph, 
 * determine the distances from the start node to each of its descendants and return the list in node number order, 
 * ascending. If a node is disconnected, it's distance should be -1

For example, there are n = 6 nodes in the graph with a starting node s The list of edges = [[1,2],[2,3],[3,4],[1,5]], 
and each has a weight of 6 

Starting from node 1 and creating a list of distances, for nodes 2 through 6 we have distances = [6, 12, 18, 6, -1].

Input Format

The first line contains an integer q, the number of queries.

Each of the following q sets of lines is as follows:

- The first line contains two space-separated integers, n and m , the number of nodes and the number of edges.
- Each of the next m lines contains two space-separated integers, u and v, describing an edge connecting node u to node v.
- The last line contains a single integer, s , the index of the starting node.

Output Format

For each of the q queries, print a single line of n - 1 space-separated integers denoting the shortest distances to each of the n - 1 
other nodes from starting position s. 
These distances should be listed sequentially by node number (i.e., 1, 2, ....,n ), but should not include node s. 
If some node is unreachable from s, print -1 as the distance to that node.

Sample input

2
4 2
1 2
1 3
1
3 1
2 3
2

sample output
6 6 -1
-1 6
*/


class Node {
    constructor(value){
        this.value = value;
        this.edges = []
        this.isStart = false
        this.weight = 0
    }
}

class Graph {
    constructor(undirected = false){
        this.undirected = undirected
        this.nodes = []
        this.edges = 0
    }

    addNode(value) {
        this.nodes.push(new Node(value))
    }

    setStartNode(value){
        const sNode =  this.getNode(value)
        sNode.isStart = true
    }

    getStartNode(){
        return this.nodes.find(node => node.isStart === true)
    }

    setNumberOfEdges(value){
        this.edges = value
    }

    getNumberOfEdges(){
        return this.edges
    }

    getNode(value){
        return this.nodes.find(node => node.value === value)
    }

    getNodes() {
        for(let i = 1; i<= this.nodes.length ; i++){
            console.log(`node ${i}`, this.getNode(i))
        }
    }

    addEdge(value1, value2){
        const sNode =  this.getStartNode()
        const node1 = this.getNode(value1)
        const node2 =  this.getNode(value2)
        if(node1 === sNode || node2 === sNode){
            if (node1 === sNode){
                node2.weight = 6
                node1.edges.push(node2)
            }else{
                node1.weight = 6
                node2.edges.push(node1)
            }
            node1 !== sNode ? node1.weight = 6 : node2.weight = 6
        }else {
            node1.weight !== 0 ? node2.weight = node1.weight + 6 : 6
            node1.edges.push(node2)
        }
    }

    getData(){
        let data = ''
        const sNode = this.getStartNode()
        const edgeArray = this.nodes.reduce((acc, node) => [...acc, ...node.edges],[])
        const nodeWithoutEdges = this.nodes.filter((node) => !edgeArray.includes(node) && node !== sNode)
        nodeWithoutEdges.forEach(node => {
            node.weight = -1
            edgeArray.push(node)
        })
        const sortedArray = edgeArray.sort((a,b) => a.value - b.value)
        for(let i = 0 ; i< sortedArray.length; i++){
            data = data + `${sortedArray[i].weight} ` 
        }

        return data
    }
}

const processData = (input) => {
    const arrayData = input.split(/\r?\n/)
    const q = arrayData[0]

    for(let x = 0; x < q; x++)
    {
        const data = x === 0 ? arrayData[1].split(' ') : arrayData[0].split(' ')
        const totalNodes = data[0]
        const totalEdges = parseInt(data[1])
        const limitForEdges = x === 0 ? totalEdges + 1 : totalEdges
        const startNode = parseInt(arrayData[limitForEdges + 1])
        const indexEdges = x === 0 ? 2 : 1

        const g = new Graph(true)

        for(let i = 1 ; i <= totalNodes; i++)
        {
            g.addNode(i)
        }


        g.setStartNode(startNode)

        for(let i = indexEdges ; i <= limitForEdges; i++)
        {
            const edges = arrayData[i].split(' ')
            const edge1 = parseInt(edges[0])
            const edge2 = parseInt(edges[1])
            g.addEdge(edge1,edge2)
        }
        
        arrayData.splice(0,limitForEdges + 2)
        //g.getNodes()
        console.log(g.getData())
    }
    
}

const input = `2
4 2
1 2
1 3
1
3 1
2 3
2`

processData(input)

