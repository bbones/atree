# ATree

Simple async tree structure viewer with additional search component 

## Use

Example:

https://github.com/bbones/atree-demo

```
<SearchBar :searcher="searcher" @select="onSelect"></SearchBar>
<ATree 
    :loader="loader" 
    :path="[]" 
    :highlight="highlight"
    @nodeClicked="onNodeClicked">
</ATree>
```
Props
* searcher - function with api call for incremental search. Returns array of nodes 
* loader(parent_id) - function api call loading nodes by given parent_id. Returns array   
* highlight - array of node ids from root to particular node that will be expanded and shown

Events
* select event in search results list
* nodeClicked occurs when user clicks a node text
* nodeContextMenu occurs when user clicks right mouse or hold tap a node text

## Example API implemented @/src/api.js
* getNodes(parent_id)
* searchNodes(searchText)
* getPath(id) - api call for path as array of ids from root to node with given id

## Node states
* isLoaded - false before emit 
* isVisible - show

## Project setup
```
npm install
```

### Compiles example and hot-reloads for development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```
