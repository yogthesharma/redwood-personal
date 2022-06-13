// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import AboutDetailsLayout from 'src/layouts/AboutDetailsLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      {/* <Route path="/article" page={ArticlePage} name="article" /> */}
      <Private unauthenticated='home' >
        <Set wrap={AboutDetailsLayout}>
          <Route path="/admin/about-details/new" page={AboutDetailNewAboutDetailPage} name="newAboutDetail" />
          <Route path="/admin/about-details/{id:Int}/edit" page={AboutDetailEditAboutDetailPage} name="editAboutDetail" />
          <Route path="/admin/about-details/{id:Int}" page={AboutDetailAboutDetailPage} name="aboutDetail" />
          <Route path="/admin/about-details" page={AboutDetailAboutDetailsPage} name="aboutDetails" />
        </Set>
      </Private>
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes


// you have developed about page and homepage
// things remaining
// 1. Do some styling First