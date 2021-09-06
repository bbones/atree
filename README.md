# ATree

Simple async tree structure viewer with additional search component 

## Use

### Example:

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
### SearchBar
#### Props
* searcher - function with api call for incremental search. Returns array of nodes 
* prompt - string parameter for prompt default "Search: "
#### Events
* select event in search results list
### Atree
#### Props
* loader(parent_id) - function api call loading nodes by given parent_id. Returns array   
* highlight - array of node ids from root to particular node that will be expanded and shown
#### Events
* nodeClicked occurs when user clicks a node text
* nodeContextMenu occurs when user clicks right mouse or hold tap a node text

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
