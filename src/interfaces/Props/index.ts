export default interface Props {
  posts: any;
  selectInput: string;
  searchInput: string;
  status: 'success' | 'loading' | 'error';
  getSelectInput: Function;
  getSearchInput: Function;
  getPosts: Function;
  clearPosts: Function;
}
