# URL Validation

KlexHealth takes safety very seriously. Therefore, for each URL, especially with the OAuth procedure (rederict urls and web origins) the following criteria must be considered:
- only the schema: `https` is supported
- the url must not contain a fragment `e.g: (https://url.com#invalid)`
- double `/` characters in path not allowed

## Example

`https://klexhealth.com/webhook#id=33` - **invalid** > because, you use the fragment `#id`

`http://klexhealth.com` - **invalid** > you use the unsupported `http` protocol

`https://klexhealth.com/info//data` - **invalid** > double `/` characters in path not allowed

If you have more questions about validating urls, we will be happy to help you.
