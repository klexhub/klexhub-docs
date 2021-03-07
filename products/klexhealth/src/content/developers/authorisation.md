# Authorisation

Security is extremely important in the healthcare sector, especially because of sensitive data insolved.
We have therefore decided to authorisation only via `OAuth2`. You cannot use other authorisazion methods such as `basic auth`.

> If you have any problems implementing oauth, plese [contact](mailto:support@klexhealth.com) use. We will be happy to assist you.

### What is OAuth and when to use it

OAuth is a standard protocol for authorisation. You can find more information on the OAuth website: https://oauth.net/ or for technical interests users on the RFC: https://tools.ietf.org/html/rfc6749.

OAuth should be preffered in any case.

### Limitation OAuth

Often, developer love the `Implicit Flow` to easy auth application against OAuth server. In this case, the OAuth server will directly return the access_token without the code exchange step. But the IETF OAuth working Group describe that this flow should nerver be used. You can read more here about the issues: https://tools.ietf.org/html/draft-ietf-oauth-security-topics-09
We had to discuss for a long time whether to allow this flow or not. But as the saying goes: "safety first". For this reason implicit flow is not supported!

The same applies to "Resource owner credentials grant". The only way to implement OAuth with KlexHealth is via code grant flow.
Yes it is a bit more complex, but much more secure.

### Setup OAuth with KlexHealth

In order to authenticat against the KlexHelath REST API via OAuth you first need to create a new user Account. Visit the page: https://klexhealth.com.

> KlexHealth is free until you deposit money in your account or apply for SEPA direct debit mandate. Are you a developer and want to use KlexHealth? Contact us, we will be happy to give you more credits to test all the features.

After that, we need to create a own client.

1. Navigate to `Clients` and click the Button "New client" (de: "Neuer client")
2. Insert a **name** for the client. You are free to chooice what you want!
3. Insert a **RederictUrl** and **WebOrigins** (You are not allowed to use `*` as wildcard!)
4. Now we can generate `ClientId` and `ClientSecret`
