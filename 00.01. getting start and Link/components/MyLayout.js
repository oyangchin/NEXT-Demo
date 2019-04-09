// components/MyLayout.js
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

//===== error
// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       {props.children}
//     </div>
//   )
// }

// export default withLayout

// //===== success
// export default function Layout(props) {
//   return (
//     <div style={layoutStyle}>
//       <Header />
//       {props.children}
//     </div>
//   )
// }

//===== success
const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout