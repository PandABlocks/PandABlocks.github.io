:html_theme.sidebar_secondary.remove:

.. include:: ../README.rst
    :end-before: when included in index.rst

How the documentation is structured
-----------------------------------

The documentation is split into 4 sections:

.. grid:: 2
    :gutter: 4

    .. grid-item-card:: :material-regular:`directions_walk;3em`

        :link: user/index
	:link-type: doc

	    user/tutorials/tutorial1_blinking_leds.rst		
            user/tutorials/tutorial2_position_capture.rst
            user/tutorials/tutorial3_position_compare.rst
            user/tutorials/tutorial4_snake_scan.rst

        +++

        Tutorials for installation and typical usage. New users start here.

    .. grid-item-card:: :material-regular:`task;3em`

        .. toctree::
            :caption: How-to Guides
            :maxdepth: 1

            developer/how-to/contribute
            developer/how-to/update-tools
            developer/how-to/make-release
            developer/how-to/run-container

        +++

        Practical step-by-step guides for day-to-day dev tasks and experienced users.

    .. grid-item-card:: :material-regular:`info;3em`

        .. toctree::
            :caption: Explanations
            :maxdepth: 1
	    
	    developer/explanations/decisions
        
        +++
	
	Explanations of how and why the architecture is why it is.

    .. grid-item-card:: :material-regular:`menu_book;3em`

        .. toctree::
            :caption: Reference
            :maxdepth: 1

	    developer/reference/standards
            user/reference/migration_guide
            user/reference/release_compatibility
            ../genindex

        +++

        Technical reference material including APIs and release notes.

The Existing Documentation for the PandABlocks projects can be found:

======================= =====================================================
PandABlocks-FPGA        https://PandABlocks.github.io/PandABlocks-FPGA
PandABlocks-rootfs      https://PandABlocks.github.io/PandABlocks-rootfs
PandABlocks-server      https://PandABlocks.github.io/PandABlocks-server
PandABlocks-webcontrol  https://PandABlocks.github.io/PandABlocks-webcontrol
PandABlocks-client      https://PandABlocks.github.io/PandABlocks-client
======================= =====================================================

.. toctree::
    :hidden:

    user/index
    developer/index
