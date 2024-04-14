
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("CulinaryContacts")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/addressbook-level3","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_m(9),_v(" "),_m(10),_v(" "),_m(11),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_m(16),_v(" "),_c('hr'),_v(" "),_m(17),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Important terms:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_c('em',[_v("displayed person list")]),_v(" refers to the contacts or archived list of persons that you are currently viewing.")])])]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Words in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UPPER_CASE")]),_v(" are the parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items in square brackets are optional."),_c('br'),_v("\ne.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/NAME [t/TAG]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/John Doe t/friend")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("…")]),_v("​ after them can be used multiple times."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[t/TAG]…​")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/supplier")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/seafood t/supplier")]),_v(" etc.")])]),_v(" "),_c('li',[_c('p',[_v("Parameters can be in any order."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/NAME p/PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p/PHONE_NUMBER n/NAME")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")]),_v(") will be ignored."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.")])])])]),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('p',[_v("Removes all persons and reservations from CulinaryContacts.")]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('p',[_v("CulinaryContacts data are saved in the hard disk automatically after any command that changes the data. There is no need to save manually.")]),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf your changes to the data file makes its format invalid, CulinaryContacts will discard all data and start with an empty data file at the next run.  Hence, it is recommended to take a backup of the file before editing it."),_c('br'),_v("\nFurthermore, certain edits can cause the CulinaryContacts to behave in unexpected ways (e.g., if a value entered is outside the acceptable range). Therefore, edit the data file only if you are confident that you can update it correctly.")])]),_v(" "),_m(29),_v(" "),_c('p',[_v("Exits the program.")]),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" A person can have any number of tags (including 0).")])]),_v(" "),_m(35),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_c('p',[_v("Shows a list of all persons in the contacts list of CulinaryContacts.")]),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_c('p',[_v("Removes the specified person from the contacts list and adds the person into the archived list.")]),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_c('p',[_v("Removes the specified person from the archived list and adds the person back into the contacts list.")]),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_c('p',[_v("Shows a list of all persons in the archived list of CulinaryContacts.")]),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Notes about reservations:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_v("Currently, editing a person in the contacts list does not update the details of the same person in the reservations list.")]),_v(" "),_c('li',[_v("If the user intends to edit the reservation details of a person, they will have to:\n"),_c('ol',[_c('li',[_v("Edit the person's details in the contacts list.")]),_v(" "),_c('li',[_v("Delete all reservations made by the person.")]),_v(" "),_c('li',[_v("Add a new reservation for every reservation deleted in the previous step with the newly updated person.")])])])])]),_v(" "),_m(72),_v(" "),_c('p',[_v("Adds a reservation to CulinaryContacts.")]),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_c('p',[_v("Example:")]),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_c('p',[_v("Deletes the specified reservation from CulinaryContacts.")]),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_c('p',[_v("Example:")]),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_c('p',[_v("Shows a sorted list of all reservations in CulinaryContacts.")]),_v(" "),_m(81),_v(" "),_m(82),_v(" "),_c('hr'),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_c('hr'),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_c('hr'),_v(" "),_m(89),_v(" "),_m(90)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#culinarycontacts-user-guide"}},[_v("CulinaryContacts User Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quickstart"}},[_v("Quickstart‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#interpreting-the-gui"}},[_v("Interpreting the GUI‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#main-window"}},[_v("Main Window‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#contact-card"}},[_v("Contact Card‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#reservation-card"}},[_v("Reservation Card‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#features"}},[_v("Features‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#utility"}},[_v("Utility‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#contacts"}},[_v("Contacts‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#archive"}},[_v("Archive‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#reservations"}},[_v("Reservations‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#faq"}},[_v("FAQ‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#known-issues"}},[_v("Known Issues‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-summary"}},[_v("Command Summary‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(91)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"culinarycontacts-user-guide"}},[_v("CulinaryContacts User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#culinarycontacts-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CulinaryContacts is a "),_c('strong',[_v("desktop app for managing contacts and reservations in your restaurant, optimized for use via a Command Line Interface")]),_v(" (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, CulinaryContacts can get your contact/reservation management tasks done faster than traditional GUI apps.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#quickstart"}},[_v("Quickstart")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#interpreting-the-gui"}},[_v("Interpreting the GUI")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#main-window"}},[_v("Main Window")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#contact-card"}},[_v("Contact Card")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#reservation-card"}},[_v("Reservation Card")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#utility"}},[_v("Utility")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#viewing-help-help"}},[_v("Viewing help:"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#clearing-all-entries-clear"}},[_v("Clearing all entries: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#saving-the-data"}},[_v("Saving the data")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#editing-the-data-file"}},[_v("Editing the data file")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#exiting-the-program-exit"}},[_v("Exiting the program: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#contacts"}},[_v("Contacts")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#adding-a-person-add"}},[_v("Adding a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#listing-all-persons-in-contacts-list-list"}},[_v("Listing all persons in contacts list: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#editing-a-person-edit"}},[_v("Editing a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#finding-persons-by-name-find"}},[_v("Finding persons by name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#filtering-persons-by-tag-filter"}},[_v("Filtering persons by tag: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#deleting-a-person-delete"}},[_v("Deleting a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")])])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#archive"}},[_v("Archive")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#archiving-a-person-archive"}},[_v("Archiving a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#unarchiving-a-person-unarchive"}},[_v("Unarchiving a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#listing-all-archived-persons-alist"}},[_v("Listing all archived persons: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")])])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#reservations"}},[_v("Reservations")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#adding-a-reservation-rsv"}},[_v("Adding a reservation: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#deleting-a-reservation-rsvdel"}},[_v("Deleting a reservation: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#sorting-reservations-rsvsort"}},[_v("Sorting reservations: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")])])])])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#faq"}},[_v("FAQ")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#known-issues"}},[_v("Known Issues")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#command-summary"}},[_v("Command Summary")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quickstart"}},[_v("Quickstart"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quickstart","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed in your Computer.")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("culinarycontacts.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S2-CS2103T-W09-3/tp/releases"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the home folder for CulinaryContacts.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar culinarycontacts.jar")]),_v(" command to run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br')]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. e.g. typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" and pressing Enter will open the help window."),_c('br'),_v("\nSome example commands you can try:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" : Lists all contacts.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01")]),_v(" : Adds a contact named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")]),_v(" to CulinaryContacts.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")]),_v(" : Deletes the 3rd contact shown in the current list.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" : Removes all persons and reservations.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"interpreting-the-gui"}},[_v("Interpreting the GUI"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#interpreting-the-gui","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"main-window"}},[_v("Main Window"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#main-window","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/main_window.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/main_window.png","alt":"image"}})])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_c('strong',[_v("Component")])]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Command Box")])]),_v(" "),_c('td',[_v("Here is where you enter commands to perform actions within the app.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Result Display")])]),_v(" "),_c('td',[_v("After executing commands in the Command Box, the Result Display shows the outcomes of your actions. This includes confirmation messages as well as command execution success and failure messages.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Active Tab")])]),_v(" "),_c('td',[_v("The tab that is underlined is known as the active tab. This indicates whether the contacts list or the archived list is displayed in the Contacts Panel.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Contacts Panel")])]),_v(" "),_c('td',[_v("This panel contains a list of "),_c('a',{attrs:{"href":"#contact-card"}},[_v("Contact Cards")]),_v(".")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Reservation Panel")])]),_v(" "),_c('td',[_v("This panel contains a list of "),_c('a',{attrs:{"href":"#reservation-card"}},[_v("Reservation Cards")]),_v(".")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"contact-card"}},[_v("Contact Card"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#contact-card","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://github.com/AY2324S2-CS2103T-W09-3/tp/assets/63834733/d227b4d0-e5d0-4d0d-aaf1-086ad160ff8a","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://github.com/AY2324S2-CS2103T-W09-3/tp/assets/63834733/d227b4d0-e5d0-4d0d-aaf1-086ad160ff8a","alt":"image"}})])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_c('strong',[_v("Component")])]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Contact Index Number")])]),_v(" "),_c('td',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" used in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv")]),_v(" commands.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Tags")])]),_v(" "),_c('td',[_v("Tags are used for finding persons with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(" command.")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The fields "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")]),_v(" on the contact card will be truncated if they are too long, to maintain neatness. The character limit before truncation is sufficient for most inputs so normal usage is not hindered.")]),_v(" "),_c('li',[_v("The 'supplier' tag is green.")]),_v(" "),_c('li',[_v("The 'employee' tag is blue.")]),_v(" "),_c('li',[_v("The 'customer' tag is yellow.")]),_v(" "),_c('li',[_v("All other tags are white.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"reservation-card"}},[_v("Reservation Card"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#reservation-card","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://github.com/AY2324S2-CS2103T-W09-3/tp/assets/63834733/d0f5018c-82c5-44e9-88ed-00de80e6d085","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://github.com/AY2324S2-CS2103T-W09-3/tp/assets/63834733/d0f5018c-82c5-44e9-88ed-00de80e6d085","alt":"image"}})])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_c('strong',[_v("Component")])]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Reservation Index Number")])]),_v(" "),_c('td',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" used in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel")]),_v(" command.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Expiry Flag")])]),_v(" "),_c('td',[_v("The expiry flag indicates if the date and time of the reservation is after the date and time when the application is launched, or after the date and time when "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")]),_v(" is invoked.")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The person's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE_NUMBER")]),_v(" and reservation's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PAX")]),_v(" on the reservation card will be truncated if they are too long, with the same reason as above.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE")]),_v(" on the reservation card is in dd/MM/yyyy format.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"utility"}},[_v("Utility"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#utility","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"viewing-help-help"}},[_v("Viewing help: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Shows the full command summary of CulinaryContacts at a glance.\nPress "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("q")]),_v(" to close the help window.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/help_window.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/help_window.png","alt":"help window"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"clearing-all-entries-clear"}},[_v("Clearing all entries: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-all-entries-clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("A confirmation message will be shown."),_c('br'),_v(" "),_c('ul',[_c('li',[_v("If user types "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("y")]),_v(", all persons and reservations will be cleared and a success message will be shown: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Clear successful!")]),_v(".")]),_v(" "),_c('li',[_v("If user types "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n")]),_v(" or anything else, the clear command will be cancelled and a message will be shown: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Clear cancelled!")]),_v(".\n"),_c('a',{attrs:{"href":"/tp/images/clear_confirmation.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/clear_confirmation.png","alt":"result for 'clear'"}})])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"saving-the-data"}},[_v("Saving the data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-the-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"editing-the-data-file"}},[_v("Editing the data file"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-the-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CulinaryContacts data are saved automatically as a JSON file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/culinarycontacts.json")]),_v(". Advanced users are welcome to update data directly by editing that data file.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"exiting-the-program-exit"}},[_v("Exiting the program: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exiting-the-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"contacts"}},[_v("Contacts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#contacts","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"adding-a-person-add"}},[_v("Adding a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-person-add","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Adds a person to the "),_c('em',[_v("displayed person list")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS [t/TAG]…​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" cannot be blank.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE_NUMBER")]),_v(" should only contain numbers, and it should be at least 3 digits long.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")]),_v(" should be of the format local-part@domain and adhere to the following constraints:\n"),_c('ol',[_c('li',[_v("The local-part should only contain alphanumeric characters and these special characters, excluding the parentheses, (+_.-). The local-part may not start or end with any special characters.")]),_v(" "),_c('li',[_v("This is followed by a '@' and then a domain name. The domain name is made up of domain labels separated by periods.\nThe domain name must:\n"),_c('ul',[_c('li',[_v("end with a domain label at least 2 characters long")]),_v(" "),_c('li',[_v("have each domain label start and end with alphanumeric characters")]),_v(" "),_c('li',[_v("have each domain label consist of alphanumeric characters, separated only by hyphens, if any")])])])])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")]),_v(" cannot be blank.")]),_v(" "),_c('li',[_v("Duplicate names are not allowed (i.e., adding a new person with the same name as another existing person is not allowed).")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Alex Yeoh p/87438807 e/alexyeoh@example.com a/Blk 30 Geylang Street 29, #01-40 t/supplier t/durian")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/David Lee p/91031282 e/david@example.com a/Blk 436 Serangoon Gardens Street 26, #02-43 t/customer")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"listing-all-persons-in-contacts-list-list"}},[_v("Listing all persons in contacts list: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-persons-in-contacts-list-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"editing-a-person-edit"}},[_v("Editing a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-person-edit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Edits an existing person in the "),_c('em',[_v("displayed person list")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [t/TAG]…​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(". The index refers to the index number shown in the "),_c('em',[_v("displayed person list")]),_v(". The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")]),_v(" "),_c('li',[_v("At least one of the optional fields must be provided.")]),_v(" "),_c('li',[_v("Existing values will be updated to the input values.")]),_v(" "),_c('li',[_v("When editing tags, the existing tags of the person will be removed (i.e., adding of tags is not cumulative).")]),_v(" "),_c('li',[_v("You can remove all the person’s tags by typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/")]),_v(" without\nspecifying any tags after it.")]),_v(" "),_c('li',[_v("Duplicate names are not allowed (i.e., editing a person's name to become the same as another existing person is not allowed).")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 p/91234567 e/johndoe@example.com")]),_v(" Edits the phone number and email address of the 1st person to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("91234567")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("johndoe@example.com")]),_v(" respectively.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 n/Betsy Crower t/")]),_v(" Edits the name of the 2nd person to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Betsy Crower")]),_v(" and removes all existing tags.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"finding-persons-by-name-find"}},[_v("Finding persons by name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#finding-persons-by-name-find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Finds persons in the "),_c('em',[_v("displayed person list")]),_v(" whose name contains any of the given keywords.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]...")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The search is case-insensitive. e.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hans")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")]),_v(".")]),_v(" "),_c('li',[_v("The order of the keywords does not matter. e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans Bo")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Bo Hans")]),_v(".")]),_v(" "),_c('li',[_v("Only the name is searched.")]),_v(" "),_c('li',[_v("Only full words will be matched e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Han")]),_v(" will not match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")]),_v(".")]),_v(" "),_c('li',[_v("Persons matching at least one keyword will be returned (i.e., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OR")]),_v(" search).")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find John")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("john")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find alex david")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alex Yeoh")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David Li")]),_v("."),_c('br')])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"filtering-persons-by-tag-filter"}},[_v("Filtering persons by tag: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-persons-by-tag-filter","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Finds persons in the "),_c('em',[_v("displayed person list")]),_v(" that have all the given tags.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter TAG [MORE_TAGS]...")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The search is case-insensitive. e.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("supplier")]),_v(" will match with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Supplier")]),_v(".")]),_v(" "),_c('li',[_v("Only full tags will be matched e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("supplier")]),_v(" will not match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("suppliers")]),_v(".")]),_v(" "),_c('li',[_v("Persons matching all tags will be returned (i.e., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AND")]),_v(" search).\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seafood supplier")]),_v(" will return persons with both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seafood")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("supplier")]),_v(" tag.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter supplier")]),_v(" returns persons with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("supplier")]),_v(" tag.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter supplier seafood")]),_v(" returns persons with both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("supplier")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seafood")]),_v(" tags.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"deleting-a-person-delete"}},[_v("Deleting a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-person-delete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Deletes the specified person from the "),_c('em',[_v("displayed person list")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the "),_c('em',[_v("displayed person list")]),_v(".")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 2")]),_v(" deletes the 2nd person in the contacts list of CulinaryContacts.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"archive"}},[_v("Archive"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#archive","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"archiving-a-person-archive"}},[_v("Archiving a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#archiving-a-person-archive","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Archives the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the contacts list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, ...")]),_v(" "),_c('li',[_v("This command can only be performed while viewing the contacts list. Type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" to view the contacts list.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive 1")]),_v(" archives the 1st person in the contacts list of CulinaryContacts.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"unarchiving-a-person-unarchive"}},[_v("Unarchiving a person: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#unarchiving-a-person-unarchive","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Unarchives the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the archived list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, ...")]),_v(" "),_c('li',[_v("This command can only be performed while viewing the archived list. Type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_v(" to view the archived list.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive 1")]),_v(" unarchives the 1st person in the archived list of CulinaryContacts.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"listing-all-archived-persons-alist"}},[_v("Listing all archived persons: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-archived-persons-alist","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/alist.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/alist.png","alt":"alist"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"reservations"}},[_v("Reservations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#reservations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"adding-a-reservation-rsv"}},[_v("Adding a reservation: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-reservation-rsv","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv INDEX d/DATE t/TIME p/PAX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Adds a reservation for the person at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(". The index refers to the index number shown in the "),_c('em',[_v("displayed person list")]),_v(".")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE")]),_v(" "),_c('strong',[_v("must be in yyyy-MM-dd")]),_v(" format.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TIME")]),_v(" "),_c('strong',[_v("must be in HHmm")]),_v(" format.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PAX")]),_v(" "),_c('strong',[_v("must be a positive integer")]),_v(". Leading zeroes should be omitted (e.g., instead of typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p/03")]),_v(", type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p/3")]),_v(").")]),_v(" "),_c('li',[_v("2 reservations made under the same name cannot have the same "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TIME")]),_v(" (i.e., combination of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TIME")]),_v(" and name of person making reservation must be unique).")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv 1 d/2024-04-17 t/1800 p/8")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"deleting-a-reservation-rsvdel"}},[_v("Deleting a reservation: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-reservation-rsvdel","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the reservation at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the reservations list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel 2")]),_v(" deletes the 2nd reservation in CulinaryContacts.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"sorting-reservations-rsvsort"}},[_v("Sorting reservations: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sorting-reservations-rsvsort","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Upcoming reservations are always on top of expired reservations.")]),_v(" "),_c('li',[_v("Upcoming reservations are sorted from earliest to latest.")]),_v(" "),_c('li',[_v("Expired reservations are also sorted from earliest to latest.")]),_v(" "),_c('li',[_v("If you add an upcoming reservation and it becomes expired while the application is open, the expiry flag will not automatically appear on the reservation card.\n"),_c('ul',[_c('li',[_v("Calling "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")]),_v(" will update the reservation card to show the expiry flag.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous CulinaryContacts home folder.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": Does archiving a contact affect reservations that were made under that contact?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": No. The reservation feature is a completely independent feature from the archive feature. This means that:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When a contact that has a reservation is archived, no changes will be made to that contact's reservations.")]),_v(" "),_c('li',[_v("An archived contact can be used to add a reservation.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known Issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command Summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Command")]),_v(" "),_c('th',[_v("Format, Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("clear")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("add")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS [t/TAG]…​")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Alex Yeoh p/87438807 e/alexyeoh@example.com a/Blk 30 Geylang Street 29, #01-40 t/supplier t/durian")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("list")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("edit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX [n/NAME] [p/PHONE_NUMBER] [e/EMAIL] [a/ADDRESS] [t/TAG]…​")]),_c('br'),_v(" e.g.,"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 n/James Lee e/jameslee@example.com")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("find")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]...")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find James Jake")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("filter")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter TAG [MORE_TAGS]...")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter supplier seafood")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("delete")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("archive")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("archive 2")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("unarchive")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unarchive 2")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("alist")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("alist")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("rsv")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv INDEX d/DATE t/TIME p/PAX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsv 1 d/2024-04-15 t/1800 p/4")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("rsvdel")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvdel 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("rsvsort")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rsvsort")])])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")]),_v(", generated on Sun, 14 Apr 2024, 16:42:43 GMT+8]")])])])}
}];
  