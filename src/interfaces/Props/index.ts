export default interface Props {
  posts: any;
  selectInput: string;
  searchInput: string;
  status: 'success' | 'loading' | 'error';
  updateSelectInput: Function;
  updateSearchInput: Function;
  getPosts: Function;
  clearPosts: Function;
  message: string;
}
