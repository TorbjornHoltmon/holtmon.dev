---
title: How to generate and configure a Dotnet / C# Client from OpenApi / Swagger
  using Nswag
poster_image: /images/openapi_logo.png
seo_title: How to generate and configure a Dotnet / C# Client from OpenApi /
  Swagger using Nswag
seo_desc: How to generate a Dotnet / C# client to call an external api using an
  OpenApi / Swagger spesification and how to configure authorization headers and
  settings for the client.
date: 2020-11-25T21:20:38.143Z
description: How to generate a Dotnet / C# client to call an external api using
  an OpenApi / Swagger spesification and how to configure authorization headers
  and settings for the client.
---
There are multiple guides on the web on how to configure Nswag in order to get a digestible client from your OpenApi spesification. If the API you are consuming does not have authorization or does not require any special headers it is a straightforward process.


In this guide, I will go through how to set up your client to accept special settings in order to add authorization headers and potentially add other settings, such as retry policies.