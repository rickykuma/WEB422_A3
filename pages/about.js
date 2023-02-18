import Link from "next/link"
import Card from 'react-bootstrap/Card'
import MovieDetails from "../components/MovieDetails"
import PageHeader from "../components/PageHeader"
import { Nav} from "react-bootstrap"



export function getStaticProps() {
    //id 139738
    return new Promise((resolve,reject)=>{
      fetch('https://shy-sandals-eel.cyclic.app/api/movies/573a1390f29313caabcd60e4').then(res=>res.json()).then(data=>{
        resolve({ props: { movie: data } })
      })
    })
  }

export default function About (props){
    console.log(props);
    return (
        <>
            <PageHeader text="About the Developer: Mohammad Rashidi"></PageHeader>
            <Card className="className">
                <Card.Body>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in facilisis leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec semper et nisi vitae tristique. Vivamus facilisis, ipsum non placerat fringilla, metus sapien maximus dolor, ut efficitur sem elit eget odio. Curabitur scelerisque semper urna, et sodales mauris mollis nec. Pellentesque tristique eleifend massa, et ultricies tortor mollis feugiat. In facilisis, est et porttitor consequat, elit nisl varius diam, id tempus turpis est ac nisl. Pellentesque accumsan vestibulum leo, vitae condimentum lacus mattis quis. Phasellus rutrum aliquet sollicitudin. Suspendisse rutrum mauris lorem, ac ullamcorper felis tristique a. Mauris consectetur odio vitae consectetur ultricies. Nulla ut pharetra nunc, id sodales arcu. Vestibulum varius quam nec felis scelerisque tristique. Vivamus sed consectetur nibh. Maecenas sed pharetra diam.

Maecenas justo augue, bibendum ut auctor vel, luctus ut lacus. Suspendisse potenti. Nam varius varius tellus vel pretium. Quisque scelerisque pellentesque mauris, at pellentesque nisl tincidunt sollicitudin. Nullam aliquam orci eu interdum rhoncus. In laoreet, neque non pharetra condimentum, sem erat imperdiet tellus, ornare aliquet enim metus quis tortor. Phasellus convallis orci in purus feugiat luctus. Praesent a orci libero. Duis ornare erat in dui ultricies, vitae scelerisque velit.<br/><br/>
                        My favorite movie of all time would be : <Link href={"/movies/"+props.movie.title} passHref legacyBehavior ><Nav.Link>{props.movie.title}</Nav.Link></Link>
                    </p>
                     
                    <MovieDetails movie={props.movie} />
                </Card.Body>
            </Card>
        </>
        
    )
}