#[macro_use] extern crate rocket;
use std::path::Path;
use rocket::response::NamedFile;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}