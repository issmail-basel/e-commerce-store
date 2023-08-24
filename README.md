
# E-Commerce Store

This project is an Angular-based e-commerce store with a focus on modularity, reactivity, and best practices.

## Features

- **Push-based Architectures with RxJS**: Leveraged in the user's product section to ensure efficient data flow and updates.
- **Debounce for User Product Search**: Implemented a search-as-you-type feature with a debounce to ensure efficient and user-friendly product searches.
- **Admin UI Inspiration**: The design and layout of the admin section are inspired by Google account settings.
- **Higher Order Containers Component**: Adopted this pattern for better separation of concerns and reusability.
- **Interceptors**: Used for setting the baseURL for API requests. This can be extended to handle tokens and language data from the server.

## Project Structure

- **Core Module**: Contains core functionalities like guards, interceptors, and authentication services.
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


While `NGRX` is a powerful tool for state management in Angular applications, especially when combined with optimistic or pessimistic update strategies and pure functions, it was not utilized in this project. The reasons for this decision are:

- **Tight Schedule**: The time constraints did not allow for the overhead required to set up and manage NGRX effectively.
  
- **Project Scale**: Given the relatively small scale of the application, introducing NGRX might have been an overkill. The benefits of NGRX are more pronounced in larger, more complex applications.
  
- **Overhead**: Writing NGRX code can introduce additional overead for creating the Actions, Reducers, State, Selectors, Effects, Resolvers etc.

Instead, the application leverages Angular services combined with RxJS for state management. For instance, subjects are used to manage and reactively update user data throughout the application. This approach provides a balance between simplicity and reactivity, ensuring efficient data flow without the overhead of a more complex state management solution.

I have previously created multiple apps, also led a team into creating an app with `NGRX`, also I have ongoing project with react which uses `Jotai` state management library