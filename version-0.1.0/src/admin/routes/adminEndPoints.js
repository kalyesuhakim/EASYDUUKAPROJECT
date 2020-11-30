import { HOST } from "../../site/config/config";

const endPoint = (url) => {
    // return HOST + url;
    return 'http://apis.hapipie.com:3333' + url;
}

export const apiToken = window._token
export const RESEARCH_TOPIC_END_POINT = 'research';
export const BLOG_TOPIC_END_POINT = 'blog';
const adminEndPoints = {
  authors: {
    all: endPoint("/authors"),
    create: endPoint("/authors/create"),
    trash: (author) => endPoint("/authors/trash/" + author),
    get: (author) => endPoint("/authors/get/" + author),
    update: (author) => endPoint("/authors/update/" + author),
  },
  topics: {
    research: {
      // publish: endPoint('/')
      all: endPoint("/research/topics/paginated"),
      create: endPoint("/research/topics/create"),
      update: (topic) => endPoint("/research/topics/update/" + topic),
      saveDraft: (topic) => endPoint("/research/topics/save/" + topic),
      get: (topic) => endPoint("/research/topics/get/" + topic),
    },
    blog: {
      all: endPoint("/blog/topics"),
      create: endPoint("/blog/topics/create"),
      update: (topic) => endPoint("/blog/topic/update" + topic),
    },
  },
  blog: {
    create: {
      post: endPoint("/blog/create/post"),
    },
    get: {
      drafts: endPoint("/blog/get/drafts"),
      draft: (index) => endPoint("/blog/get/draft/" + index),
      published: endPoint("/blog/get/published"),
    },
    update: {
      draft: (index) => endPoint("/blog/update/draft/" + index),
    },
    publish: {
      draft: (index) => endPoint("/blog/publish/draft/" + index),
    },
    trash: {
      draft: (index) => endPoint("/blog/trash/draft/" + index),
      published: (index) => endPoint("/blog/trash/published/" + index),
    },
    read: {
      draft: (index) => endPoint("/blog/get/draft/" + index),
      published: (index) => endPoint("/blog/read/published/" + index),
    },
  },
  uploadImage: {
    single: endPoint("/uploads/image/single"),
  },
  bookStore: {
    items: {
      getAll: endPoint("/book-store"),
      getItem: endPoint("/book-store"),
    },
    books: {
      all: endPoint("/book-store/books/all"),
      add: endPoint("/book-store/books/add"),
      details: (index) => endPoint("/book-store/books/details/" + index),
      delete: (index) => endPoint("/book-store/books/delete/" + index),
      update: (index) => endPoint("/book-store/books/update/" + index),
    },
    categories: {
      get: endPoint("/book-store/categories/get"),
      add: endPoint("/book-store/categories/add"),
      delete: (index) => endPoint("/book-store/categories/delete/" + index),
      update: (index) => endPoint("/book-store/categories/update/" + index),
    },
    settings: {
      get: endPoint("/book-store/settings/get/all"),
      update: (index) => endPoint("/book-store/settings/update/" + index),
      updatePaypal: endPoint("/book-store/settings/update-paypal-config"),
    },
  },

  messages: {
    unread: endPoint("/messages/get/unread"),
    new_count: endPoint("/messages/new/count"),
    all: endPoint("/messages/get/all"),
    delete: (index) => endPoint("/messages/delete/" + index),
    markAsRead: (index) => endPoint("/messages/mark/as_read/" + index),
    search: (term) => endPoint("/messages/search/" + encodeURI(term)),
  },

  notifications: {
    all: endPoint("/notifications/get/all"),
    mark_as_read: endPoint("/notifications/mark/as_read"),
    unread: endPoint("/notifications/get/unread/count"),
  },

  pages: {
    all: endPoint("/pages/get/all"),
  },
  addFamily: endPoint("/admin/add_family"),

  /**
   * Graph ql endpoints
   */
  graphql: endPoint("/graphql"),
  // graphql: "https://kijje-api.herokuapp.com/graphql",
  graphql: {
    dev: endPoint('/admin/graphql/dev'),
    prod: endPoint('/admin/graphql')
  }
};

export default adminEndPoints;
