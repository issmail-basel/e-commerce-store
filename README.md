
# E-Commerce Store

This project is an Angular-based e-commerce store with a focus on modularity, reactivity, and best practices.

## Features

- **Push-based Architectures with RxJS**: Leveraged in the user's product section to ensure efficient data flow and updates.
- **Debounce for User Product Search**: Implemented a search-as-you-type feature with a debounce to ensure efficient and user-friendly product searches.
- **Admin UI Inspiration**: The design and layout of the admin section are inspired by Google account settings.
- **Higher Order Containers Component**: Adopted this pattern for better separation of concerns and reusability.
- **Interceptors**: Used for setting the baseURL for API requests. This can be extended to handle tokens and language data from the server.
- **State Management with ngrx/data**: Implemented for products CRUD operations, ensuring a robust and maintainable state management solution.
- **ESLint and Prettify Integration**: Ensures consistent code style and enforces best practices across the project.

## Project Structure

- **Core Module**: Contains core functionalities like guards, interceptors, and authentication services.
- **Features Module**: 
  - **Admin Module**: Manages the admin functionalities with components for the dashboard and product management.
  - **Auth Module**: Handles authentication-related components and functionalities.
  - **User Module**: Caters to the end-users with components for product display, product details, and related services.
- **Shared Module**: Contains shared components like a language switcher.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/issmail-basel/e-commerce-store.git
   ```

2. Navigate to the project directory and install dependencies:
   ```
   cd e-commerce-store
   npm install
   ```

## Running the Project

To start the development server:
```
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

## Running Unit Tests

Execute the unit tests via [Karma](https://karma-runner.github.io) with:
```
ng test
```

### Tests details
I've added unit testing for various cases. Added unit tests for services, components, and interceptors.


#### **AuthService**

- **should fetch user data**: This test ensures that the `AuthService` correctly fetches user data from the backend mock.
  
- **should be created**: Validates that the `AuthService` is properly instantiated when required.

#### **SearchFieldComponent**

- **should update search query when input changes**: This test checks if the search query updates in real-time as the user types in the search field.
  
- **should create**: Ensures that the `SearchFieldComponent` is correctly instantiated and rendered.

#### **ApiInterceptor**

- **should prepend baseURL to the request URL**: Validates that the `ApiInterceptor` correctly prepends the `baseURL` from the environment configuration to every HTTP request.


## Examples

### Push-based Architectures with RxJS

In the user's product section, we've adopted a push-based architecture using RxJS to handle data streams efficiently. This ensures that components receive updates reactively, leading to a more responsive user experience.

### Debounce for User Product Search

The product search feature in the user module is designed to be intuitive and efficient. As users type in their search queries, the application waits for a brief pause (debounce) before executing the search. This ensures that the system doesn't get overwhelmed with requests, especially when users type quickly.

### Interceptors

The `ApiInterceptor` is set up to prepend the baseURL for all API requests. This interceptor can be extended to handle tokens and language data from the server, ensuring that every request has the necessary headers and data.

## Notes

### Code structure

I would prefer **Enterprise Monorepo Angular Pattern**: Preferred for segregating the admin and user modules, ensuring scalability and maintainability.

### State management


While `NGRX` is a powerful tool for state management in Angular applications, it was only used for crud operations using `NGRX/data` in this project. The reasons for this decision are:

- **Tight Schedule**: The time constraints did not allow for the overhead required to set up and manage NGRX effectively.
  
- **Project Scale**: Given the relatively small scale of the application, introducing NGRX might have been an overkill. The benefits of NGRX are more pronounced in larger, more complex applications.
  
- **Overhead**: Writing NGRX code can introduce additional overead for creating the Actions, Reducers, State, Selectors, Effects, Resolvers etc.

Instead, the application leverages Angular services combined with RxJS for state management. For instance, subjects are used to manage and reactively update user data throughout the application. This approach provides a balance between simplicity and reactivity, ensuring efficient data flow without the overhead of a more complex state management solution.
