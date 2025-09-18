<h3>You have a new Contact via the Contact form</h3>


<div>
	<p>Name: {{ $fullName }}</p>
	<p>Tel: {{ $tel }}</p>
	<p>eMail: {{ $email }}</p>
	<p>Message: {{ $bodyMessage }}</p>
</div>
<br />

<h4>Sent via {{ $email }}</h4>