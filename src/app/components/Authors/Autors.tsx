import css from "./Authors.module.css";
import Container from "@/app/components/Container/Container";

const Authors=()=>{
    return (<>
     <section className={css.wrapAuthors}>
     <Container>
        <div >
             
          <h2 className={css.title}>
           Авторы нашего блога о путешествиях
          </h2>
     
          </div>
               </Container>

</section>
    
    </>);

}

export default Authors;