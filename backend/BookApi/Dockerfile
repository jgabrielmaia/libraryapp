# Use the .NET SDK image for the build stage
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["BookApi.csproj", "BookApi/"]
WORKDIR "/src/BookApi"
RUN dotnet restore

# Copy the entire project and build
COPY . .
RUN dotnet build -c Release -o /app/build

# Use a separate image for publishing to reduce the size of the final runtime image
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

# Use the runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app

# Copy the published files from the 'publish' stage
COPY --from=publish /app/publish .

# Expose ports and set the entry point
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["dotnet", "BookApi.dll"]