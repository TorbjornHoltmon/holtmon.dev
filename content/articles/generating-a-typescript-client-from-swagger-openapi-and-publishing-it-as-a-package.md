---
title: Generating a Typescript client from Swagger / OpenApi with Dotnet and publishing it as a pacge.
poster_image: /images/OpenAPI_Logo.png
seo_title: How to set up AWS SNS on multiple environments with the serverless
    framework and node.js.
seo_desc: How to get quickly started with AWS SNS on multiple environments with
    the serverless framework and node.js.
date: 2020-11-28
description: How to get quickly started with AWS SNS on multiple environments
    with the serverless framework and node.js.
---

There are many ways that you can generate a client from swagger. One of them is using Dotnet and the library [Nswag](https://github.com/RicoSuter/NSwag).

In this article I will detail how you can create your a Typescript client, transpile and package it, and finally publish it as a github npm package that you can consume on your frontend. The result will be a repository where all you need to do is update the package version, and github actions will update the client with the newest version of the OpenApi documentation.

#### Using my pre-configured repo

Further down the article I will explain how to set this up for yourselves. If you are not interested in the details you only need to [download my repo which is available here](www.google.com) and make these changes:

Update the nswag.json to match your Swagger / OpenApi docs and name your client in `Dotnet.OpenApi.Client.Generator/nswag.json`

```json{}[Dotnet.OpenApi.Client.Generator/nswag.json]
{
  "runtime": "Net50",
  "defaultVariables": null,
  "documentGenerator": {
    "fromDocument": {
      /**
      *   Replace the "url" with the path to the Swagger / OpenApi specification-
      *   that you want to generate your client from.
      */
      "url": "https://petstore.swagger.io/v2/swagger.json",
      "output": null,
      "newLineBehavior": "Auto"
    }
  },
  // Rest of the file not included for brevity
  // ...
```

Update the package name and package output in `Rollup-Client/package.json`

```json{}[Rollup-Client/package.json]
{
  {
    // Rename your package, should be "@Your github username/Package name
    "name": "@torbjornholtmon/generated-pet-store-client",
    "version": "1.0.0",
    "description": "",
    // Also rename the output to whatever you want to name your client.
    "main": "dist/petStoreClient.js",
    "module": "dist/petStoreClient.mjs",
    "typings": "dist/petStoreClient.d.ts",
    "scripts": {
        "build": "rollup -c"
    },
    "files": [
        "dist"
    ],
    // Link to your github repo
    "repository": {
        "type": "git",
        "url": "https://github.com/TorbjornHoltmon/Generate-Typescript-Client-From-OpenApi"
    },
    "publishConfig": {
        "registry": "https://npm.pkg.github.com/"
    },
    // Rest of the file not included for brevity
    // ...
```

Now all you need to do is push the changes to your repo and github actions will build your package from the generated client.

To use your client you will need to be authorized. To authorize yourselves go to [your personal access tokens on github](http://github.com/settings/tokens) and create a new token with "repo" and "read:packages" scopes.

![Github token generation](/images/github-token-generation.png)

**Save your token somewhere safe, preferably in a password manager.**

Open your terminal and run:

`npm login --scope=@YOUR-GITHUB-USERNAME --registry=https://npm.pkg.github.com`

And enter your username, use your token as the password and finally it will ask for your email.

The last thing you need to do now is add a `.npmrc` in the project that you wish to install your package in and add this line:

`@YouGithubUsername:registry=https://npm.pkg.github.com/YourGithubUsername`

You can now install your package with:

`npm install @YourGithubUsername/YourPackageName`

Works brilliantly!

![Github token generation](/images/generated-client-test.gif)

#### Setting up and configuring your own generator.

To setup this project [you will need to download .Net 5](https://dotnet.microsoft.com/download). After dotnet is installed, create your project directory and open your terminal in the directory and run:

`dotnet new classlib --framework net5.0 --name Dotnet.OpenApi.Client.Generator`

The class library will create a class, this project won't be needing any code so you are free to delete it.

Open up the `.csproj` project file and add the necessary packages and the build script:

```xml{}[Dotnet.OpenApi.Client.Generator.csproj]
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net5.0</TargetFramework>
    <GenerateCode>True</GenerateCode>
  </PropertyGroup>

  <ItemGroup>
    <Compile Remove="node_modules\**" />
    <EmbeddedResource Remove="node_modules\**" />
    <None Remove="node_modules\**" />
    <TypeScriptCompile Remove="node_modules\**" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="12.0.3" />
    <PackageReference Include="NSwag.MSBuild" Version="13.9.4">
      <PrivateAssets>all</PrivateAssets>
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
    </PackageReference>
  </ItemGroup>

  <Target Name="NSwag" BeforeTargets="PrepareForBuild" Condition="'$(GenerateCode)'=='True' ">
    <Exec Command="$(NSwagExe_Net50) run nswag.json /variables:Configuration=$(Configuration)" />
  </Target>
</Project>
```

Next up you will need to configure your nswag.json file, [unfortunately the json file is not very well documented](https://github.com/RicoSuter/NSwag/wiki/NSwag-Configuration-Document). I recommend configuring it manually [through their GUI](https://github.com/RicoSuter/NSwag/wiki/NSwagStudio) (Windows only unfortunately) which will show you all possible options for your client.

The settings in my `nswag.json` is what I recommend, and will work well. There is currently a bug when using axios as your client, so if you are not using my configuration and bundler I recommend using `Fetch` as your `template` in `nswag.json` instead.
I implemented a temporary workaround with class a class extension. You can configure your client with some extension methods and options, I might write about how to do that in the future.

Using `Axios` as your template is what I recommend, you can create your own axios client and add headers and other options on the client side and then pass it to the generated client. Very handy when adding authorization headers. Its a convenient and well documented library, and much easier to configure than extending the generated client.

To build the client, first run: `dotnet restore` then `dotnet build` in your project directory. Remember to set your output location in `nswag.json`.

If you don't have any need for an npm package you can use the client as is and copy it to your typescript project.

If you are using javascript in your project you will need to package your client before use. Use the rollup config I have in my repo or use your preferred bundler.

I hope this guide has helped you. If you have any issues or questions, don't hesitate to (create an issue on my repo)[https://github.com/TorbjornHoltmon/Generate-Typescript-Client-From-OpenApi], and I will do what I can to help.
