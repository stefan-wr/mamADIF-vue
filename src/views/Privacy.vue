<template>
  <ViewGrid
    id="file"
    :file-mode="false"
    :svg="false"
    :footer-always="true"
  >
    <div class="content-nw txt-content">
      <h2>Privacy Policy</h2>

      <h3>Fundamentals</h3>

      <p>
        This Privacy Policy is intended to inform the users of this website about the nature, scope
        and purpose of the collection and use of personal data by the website operator of
        mamADIF.org.
      </p>

      <p>
        The website operator takes your privacy very seriously and will treat your personal
        information confidentially and in accordance with the law. As new technologies and the
        continuous development of this website may make changes to this privacy policy, we recommend
        that you review the privacy policy at regular intervals.
      </p>

      <p>
        Definitions of the terms used (e.g. "personal data" or "processing") can be found in Art. 4
        GDPR.
      </p>

      <p>
        You can visit this website without giving any personal information. However, in order to
        improve our online offer and for security reasons, we store (without personal reference)
        your access data to this website. These access data include e.g. the files you requested or
        the name of your Internet service provider. Due to the anonymization of the data,
        conclusions about your person are not possible.
      </p>

      <h3>Access data</h3>

      <p>
        We, the website operator or our processor and site provider, the STRATO AG, collect data on
        access to the website based on our legitimate interest (see Art. 6 para. 1 (f) GDPR) and
        save it as "server log files" on the server of the website. The following data is logged:
      </p>

      <ul>
        <li>Visited website</li>
        <li>Time of access</li>
        <li>Amount of data sent in bytes</li>
        <li>Source / reference from which you came to the page</li>
        <li>Browser used</li>
        <li>Operating system used</li>
        <li>Used IP address</li>
      </ul>

      <p>
        The site provider stores the IP addresses for 7 days in the server log files. The storage of
        the data is done for security reasons e.g. to clarify cases of abuse. By means of the
        information stored in these log files, identification of the user without additional
        information is not possible.
      </p>
      <p>
        After 7 days, the IP addresses will be irrevocably anonymized by the site provider. After
        that, an identification of the user is no longer possible by additional information. The
        further storage of these anonymized log files takes place for the maximum duration of the
        website's existence and serves exclusively statistical purposes and the administration and
        optimization of the website.
      </p>

      <p>
        If data must be revoked for reasons of proof, they are excluded from the deletion until the
        incident has been definitively clarified.
      </p>

      <p>
        Only the page provider has access to the non-anonymized IP address of the user for 7 days.
        We, the website operator, on the other hand, never have access to the non-anonymized IP
        address of the user. Therefore, it is never possible for us to identify the user. According
        to Art. 11 para. 2 GDPR, the following user's rights do not apply to the access data and can
        not be executed by the website operator because we can not identify the user: right of
        access, right to rectification, right to erasure, right to restriction of processing, right
        to data portability (Art.15 to Art. 20 GPDR).
      </p>

      <h3>Handling of contact information</h3>

      <p>
        If you contact us, the website operator, through the offered contact options, your details
        will be stored for the duration of the communication, so that they can be used to process
        and answer your request. This data will not be disclosed to third parties.
      </p>

      <h3>Rights of the user</h3>

      <p>
        As a user, you have the right to receive, on request, free information about which personal
        data has been stored about you. You also have the right to correct incorrect data and to
        restrict or delete your personal data. If applicable, you can also claim your right to data
        portability. If you believe your data has been processed unlawfully, you can file a
        complaint with the appropriate regulatory agency.
      </p>

      <h3>Deletion of data</h3>

      <p>
        If your request does not conflict with a legal obligation to store data (e.g. data
        retention), you are entitled to delete your data. Data stored by us, if they are no longer
        necessary for their purpose and there are no legal retention periods, will be deleted. If
        deletion can not be carried out because the data is required for legal purposes, data
        processing is restricted. In this case, the data is locked and not processed for other
        purposes.
      </p>

      <h3>Right to object</h3>

      <p>
        Users of this website can exercise their right of objection and object to the processing of
        their personal data at any time.
      </p>

      <p>
        If you would like a correction, blocking, deletion or information about the personal data
        stored about you, or if you have questions regarding the collection, processing or use of
        your personal data or if you wish to revoke your consent, please contact us via the
        following e-mail address: contact@mamADIF.org
      </p>
    </div>
  </ViewGrid>
</template>

<script>
import ViewGrid from "@/components/base/ViewGrid.vue";

export default {
  name: "Main",
  components: {
    ViewGrid
  }
};
</script>

<style lang="scss" scoped></style>
