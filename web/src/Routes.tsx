// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import TimelinesLayout from 'src/layouts/TimelinesLayout'
import HomeDetailsLayout from 'src/layouts/HomeDetailsLayout'
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

      <Private unauthenticated="home">
        <Set wrap={TimelinesLayout}>
          <Route path="/admin/timelines/new" page={TimelineNewTimelinePage} name="newTimeline" />
          <Route path="/admin/timelines/{id}/edit" page={TimelineEditTimelinePage} name="editTimeline" />
          <Route path="/admin/timelines/{id}" page={TimelineTimelinePage} name="timeline" />
          <Route path="/admin/timelines" page={TimelineTimelinesPage} name="timelines" />
        </Set>
      </Private>

      <Private unauthenticated="home">
        <Set wrap={HomeDetailsLayout}>
          <Route path="/admin/home-details/new" page={HomeDetailNewHomeDetailPage} name="newHomeDetail" />
          <Route path="/admin/home-details/{id}/edit" page={HomeDetailEditHomeDetailPage} name="editHomeDetail" />
          <Route path="/admin/home-details/{id}" page={HomeDetailHomeDetailPage} name="homeDetail" />
          <Route path="/admin/home-details" page={HomeDetailHomeDetailsPage} name="homeDetails" />
        </Set>
      </Private>

      <Private unauthenticated="home">
        <Set wrap={AboutDetailsLayout}>
          <Route path="/admin/about-details/new" page={AboutDetailNewAboutDetailPage} name="newAboutDetail" />
          <Route path="/admin/about-details/{id:String}/edit" page={AboutDetailEditAboutDetailPage} name="editAboutDetail" />
          <Route path="/admin/about-details/{id:String}" page={AboutDetailAboutDetailPage} name="aboutDetail" />
          <Route path="/admin/about-details" page={AboutDetailAboutDetailsPage} name="aboutDetails" />
        </Set>
      </Private>

      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:String}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:String}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>

      <Set wrap={BlogLayout}>
        <Route path="/blogs" page={BlogsPage} name="blogs" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/blog/{id:String}" page={BlogPage} name="blog" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

