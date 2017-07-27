import sidebar from './sidebar.js';
import dropdowns from './dropdowns.js';
// import move from './mover.js';
import activateClipboard from './activateClipboard.js';
// import bindRunExamples from './bindRunExamples.js';
import {fixSidebar, followSidebarNavigation} from './fix-sidebar.js';

var alg = require('algolia-frontend-components/javascripts.js');

const docSearch = {
  apiKey: '5cb6763f264e31381e18639a1147634c',
  indexName: 'react-instantsearch',
  inputSelector: '#searchbox',
};

const header = new alg.communityHeader(docSearch);

const container = document.querySelector('.documentation-container');
const codeSamples = document.querySelectorAll('.code-sample');

dropdowns();
// move();
activateClipboard(codeSamples);


const sidebarContainer = document.querySelector('.sidebar');
if(sidebarContainer) {
  const headerHeight = document.querySelector('.algc-navigation').getBoundingClientRect().height;
  const contentContainer = document.querySelector('.documentation-container');
  fixSidebar({sidebarContainer, topOffset: headerHeight});
  followSidebarNavigation(sidebarContainer.querySelectorAll('a'), contentContainer.querySelectorAll('h2'));
}
